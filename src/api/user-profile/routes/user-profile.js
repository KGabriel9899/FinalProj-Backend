'use strict';

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::user-profile.user-profile');
//////////////
// 'use strict';

// /**
//  * user-profile router
//  */

// const { createCoreRouter } = require('@strapi/strapi').factories;

// module.exports = createCoreRouter('api::user-profile.user-profile', [
//   {
//     method: 'GET',
//     path: '/api/user-profiles',
//     handler: async (ctx) => {
//       const { users_id } = ctx.query;

//       // Retrieve the user profiles based on users_id
//       const profiles = await strapi.services['user-profile'].find({ users_id });

//       // Return the filtered profiles
//       return profiles;
//     },
//   },
// ]);

