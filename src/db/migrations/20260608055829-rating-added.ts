'use strict';

import { QueryInterface } from "sequelize";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface:QueryInterface ) {
    await queryInterface.sequelize.query(`
        ALTER TABLE hotels 
        ADD COLUMN ratings DECIMAL(3,2) DEFAULT 0,
        ADD COLUMN rating_count INT DEFAULT 0
      `)
  },

  async down (queryInterface:QueryInterface ) {
    await queryInterface.sequelize.query(`
        ALTER TABLE hotels 
        DROP COLUMN ratings,
        DROP COLUMN rating_count;
      `)
  }
};
