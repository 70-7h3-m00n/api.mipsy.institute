'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#lifecycle-hooks)
 * to customize this model
 */
const slugify = require('slugify')

module.exports = {
  lifecycles: {
    beforeCreate: async data => {
      data.title && ((data.slug = slugify(data.title, { lower: true })), 'slug')
        data.studyField &&
          (data.studyFieldSlug =
            slugify(data.studyField, { lower: true }) || 'studyFieldSlug')
    },
    // beforeUpdate: async (params, data) => {
    //   data.title && (data.slug = slugify(data.title, { lower: true }) || 'slug')
    //     data.studyField &&
    //       (data.studyFieldSlug =
    //         slugify(data.studyField, { lower: true }) || 'studyFieldSlug')
    // }
  }
};
