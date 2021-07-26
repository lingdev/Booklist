/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` your home page.            *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/

  '/': { view: 'pages/homepage' },
  
  'POST  /api/register':   { action: 'register/register'   },
  'POST  /api/login':   { action: 'auth/login'   },
  'POST  /api/create-book':   { action: 'book/createbook'   },
  'GET  /api/show-books':   { action: 'book/showbook'   },
  'POST  /api/delete-book':   { action: 'book/deletebook'   },
  'POST  /api/edit-book':   { action: 'book/editbook'   },
  'POST  /api/get-book':   { action: 'book/getbook'   },
  'GET  /api/profile':   { action: 'auth/profile'   },
  'POST  /api/edit-profile':   { action: 'auth/editprofile'   },









  /***************************************************************************
  *                                                                          *
  * More custom routes here...                                               *
  * (See https://sailsjs.com/config/routes for examples.)                    *
  *                                                                          *
  * If a request to a URL doesn't match any of the routes in this file, it   *
  * is matched against "shadow routes" (e.g. blueprint routes).  If it does  *
  * not match any of those, it is matched against static assets.             *
  *                                                                          *
  ***************************************************************************/


};
