# The RrHN Server

This little server does two things:
1. Offer a programmer-friendly way to get the _current_ top stories on Hacker News (the official API is less friendly).
2. Allow the client to retrieve and change the seen/read status of items.

#### This server **does not**:
* Offer any kind of security. It is meant as an educational tool, not a production-quality tool.
* Support multiple users. (Yet?)
* Return any HN items that are not stories linking to an external site. So "Ask HN" items, job postings, polls etc. are not included in the result.
* Serve the static files (i.e. your html,css,js) through a dev-server. In fact it does not serve the static files at all. You'll have to run the dev-server from `create-react-app` in side-by-side to this server.

#### This server does:
* Update itself whenever HN updates it's list of top stories.
* Store seen/read statuses in a Mongo database.


The server requires, therefore, a **running MongoDB** on its default port 27017.

## Item statuses

Any HN item can have a status:
* If the user has clicked its title (showing the site in the right iframe area), the status becomes **"read"**.
* The user can tell the RrHN client that he/she is done with the current list of HN items by marking them all as **"seen"**.
* Any item that is not `read` or `seen` will be considered **"new"** by the RrHN client.

The idea is that items that are `new` are highlighted by the client, so the user can navigate much more quickly through the long list of top stories if he's seen most of them before.

The server only stores which items are `seen` or `read`. It is up to the client to treat all other items as `new`.

## Services of the server:

#### GET /hn/topstories
Retrieve a JSON file with the current top stories of Hacker News. Only real stories are returned. "Ask HN"-items, jobs, polls etc. are left out. The list is usually between 450 and 500 items long.

Here's a code snippet (using the fetch-API, and assuming the server runs on localhost:3000):
```js
async loadItems() {
    const url = "http://localhost:3000/hn/topstories"
    const response = await fetch(url);
    if (response.ok) {
      throw new Error(`HTTP GET request went wrong: got "${response.statusText}" for "${url}"`)
    }
    const json = await response.json();
    return json;
}
```

#### GET /itemStatuses
Retrieve a mapping from HN id's to the item statuses `'read'` or `'seen'`. This mapping a just a Javascript object, like this:  
```js
{
  12553423: 'seen',
  12575665: 'read',
  12556074: 'seen',
  // almost 500 more key-value pairs
}
```
It is **not an array** An object is more useful here: you can lookup the status of an item immediately like this: `status = allStatuses[item.id]` (assuming 'allStatuses' is your variable that refers to the data from the server).

Here's a code snippet (quite identical to the previous one):
```js
async loadStatuses() {
    const url = "http://localhost:3000/itemStatuses"
    const response = await fetch(url);
    if (response.ok) {
      throw new Error(`HTTP GET request went wrong: got "${response.statusText}" for "${url}"`)
    }
    const json = await response.json();
    return json;
}
```


#### PUT /itemStatuses/_id_
Change the seen/read status of an HN item.
* The _id_ is a Hacker News id (like 12575665).
* It's OK if the id _does not exist_ in the DB yet.
* The payload is a simple text: Either
   * `seen`, or
   * `read`
* The put-request must be sent with a special HTTP header:  `Content-Type: text/plain`. (This is due to a bug in the Express JSON parser.)

**Note:** We don't store the status `new` in the database. A story is simply `new` if it's not in the DB (i.e. not `seen` or `read`).

Here's a code snippet for sending PUTrequest like this (using _SuperAgent_, and assuming the server runs on localhost:3000):  
```js
storeItemStatus(id,status) {  // status is either "seen" or "read"
  const url = "http://localhost:3000/itemStatuses/" + id;
  const response = await fetch(url, {
    method: "PUT",
    headers: {
      'Content-Type': 'text/plain'
    },
    body: status,
  });
  if (!response.ok) {
    throw new Error(`HTTP PUT request went wrong: got "${response.statusText}" for "${url}"`)
  }
  // no return statement: we won't get 
  // anything interesting from the server.
}
```
