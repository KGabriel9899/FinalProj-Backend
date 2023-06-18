'use strict';
const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::user-profile.user-profile');
////////////////////////////////
// 'use strict';
// const { createCoreController } = require('@strapi/strapi').factories;

// module.exports = Object.assign(
//   createCoreController('api::user-profile.user-profile'),
//   {
//     async find(ctx) {
//       const { users_id } = ctx.query;

//       // Retrieve the user profiles based on users_id
//       const profiles = await strapi.services['user-profile'].find({ users_id });

//       // Return the filtered profiles
//       return profiles;
//     },
//   }
// );
