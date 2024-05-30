import { QueryInterface } from 'sequelize';

export default {
  up: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkInsert('Users', [
      {
        username: 'john_doe',
        password: 'password123',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: 'jane_doe',
        password: 'password456',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);

    const users = await queryInterface.sequelize.query(
      `SELECT id FROM Users WHERE username IN ('john_doe', 'jane_doe');`
    );

    const userJohnId = users[0][0].id;
    const userJaneId = users[0][1].id;

    await queryInterface.bulkInsert('Contacts', [
      {
        userId: userJohnId,
        firstName: 'John',
        lastName: 'Smith',
        email: 'john.smith@example.com',
        phone: '123-456-7890',
        cellPhone: 9876543210,
        address: '123 Main St',
        photo: 'john_photo.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: userJohnId,
        firstName: 'Alice',
        lastName: 'Johnson',
        email: 'alice.johnson@example.com',
        phone: '321-654-0987',
        cellPhone: 9876543211,
        address: '124 Main St',
        photo: 'alice_photo.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: userJohnId,
        firstName: 'Bob',
        lastName: 'Brown',
        email: 'bob.brown@example.com',
        phone: '213-546-8790',
        cellPhone: 9876543212,
        address: '125 Main St',
        photo: 'bob_photo.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: userJohnId,
        firstName: 'Charlie',
        lastName: 'Davis',
        email: 'charlie.davis@example.com',
        phone: '312-645-9078',
        cellPhone: 9876543213,
        address: '126 Main St',
        photo: 'charlie_photo.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: userJohnId,
        firstName: 'Dave',
        lastName: 'Miller',
        email: 'dave.miller@example.com',
        phone: '132-546-8709',
        cellPhone: 9876543214,
        address: '127 Main St',
        photo: 'dave_photo.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: userJaneId,
        firstName: 'Eve',
        lastName: 'Wilson',
        email: 'eve.wilson@example.com',
        phone: '231-654-9087',
        cellPhone: 9876543215,
        address: '128 Main St',
        photo: 'eve_photo.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: userJaneId,
        firstName: 'Fay',
        lastName: 'Taylor',
        email: 'fay.taylor@example.com',
        phone: '231-456-9870',
        cellPhone: 9876543216,
        address: '129 Main St',
        photo: 'fay_photo.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: userJaneId,
        firstName: 'Grace',
        lastName: 'Anderson',
        email: 'grace.anderson@example.com',
        phone: '312-654-7890',
        cellPhone: 9876543217,
        address: '130 Main St',
        photo: 'grace_photo.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: userJaneId,
        firstName: 'Hank',
        lastName: 'Thomas',
        email: 'hank.thomas@example.com',
        phone: '123-546-8790',
        cellPhone: 9876543218,
        address: '131 Main St',
        photo: 'hank_photo.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: userJaneId,
        firstName: 'Ivy',
        lastName: 'Moore',
        email: 'ivy.moore@example.com',
        phone: '213-645-8790',
        cellPhone: 9876543219,
        address: '132 Main St',
        photo: 'ivy_photo.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkDelete('Contacts', null, {});
    await queryInterface.bulkDelete('Users', null, {});
  },
};
