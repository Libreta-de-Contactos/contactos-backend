-- Crear la base de datos
CREATE DATABASE IF NOT EXISTS contact_book_db;
USE contact_book_db;

-- Crear la tabla Users
CREATE TABLE IF NOT EXISTS Users (
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Crear la tabla Contacts
CREATE TABLE IF NOT EXISTS Contacts (
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    userId INT UNSIGNED NOT NULL,
    firstName VARCHAR(255) NOT NULL,
    lastName VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    phone VARCHAR(255),
    cellPhone BIGINT,
    address VARCHAR(255),
    photo VARCHAR(255),
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (userId) REFERENCES Users(id) ON DELETE CASCADE ON UPDATE CASCADE
);

-- Insertar datos en la tabla Users
INSERT INTO Users (username, password) VALUES
('john_doe', '$2b$10$hiY67khiSpoSDvPbNh04xOhG5sJplmzK2rWMwlevhu54Y1fAjujxa'), -- password123
('jane_doe', '$2b$10$Ir1CRGTSR1HHhXPHhBSDKeYJJfAuzv5WucxI1Lunkiza602HumWqO'); -- password456

-- Insertar datos en la tabla Contacts
INSERT INTO Contacts (userId, firstName, lastName, email, phone, cellPhone, address, photo) VALUES
((SELECT id FROM Users WHERE username='john_doe'), 'John', 'Smith', 'john.smith@example.com', '123-456-7890', 9876543210, '123 Main St', 'john_photo.jpg'),
((SELECT id FROM Users WHERE username='john_doe'), 'Alice', 'Johnson', 'alice.johnson@example.com', '321-654-0987', 9876543211, '124 Main St', 'alice_photo.jpg'),
((SELECT id FROM Users WHERE username='john_doe'), 'Bob', 'Brown', 'bob.brown@example.com', '213-546-8790', 9876543212, '125 Main St', 'bob_photo.jpg'),
((SELECT id FROM Users WHERE username='john_doe'), 'Charlie', 'Davis', 'charlie.davis@example.com', '312-645-9078', 9876543213, '126 Main St', 'charlie_photo.jpg'),
((SELECT id FROM Users WHERE username='john_doe'), 'Dave', 'Miller', 'dave.miller@example.com', '132-546-8709', 9876543214, '127 Main St', 'dave_photo.jpg'),
((SELECT id FROM Users WHERE username='jane_doe'), 'Eve', 'Wilson', 'eve.wilson@example.com', '231-654-9087', 9876543215, '128 Main St', 'eve_photo.jpg'),
((SELECT id FROM Users WHERE username='jane_doe'), 'Fay', 'Taylor', 'fay.taylor@example.com', '231-456-9870', 9876543216, '129 Main St', 'fay_photo.jpg'),
((SELECT id FROM Users WHERE username='jane_doe'), 'Grace', 'Anderson', 'grace.anderson@example.com', '312-654-7890', 9876543217, '130 Main St', 'grace_photo.jpg'),
((SELECT id FROM Users WHERE username='jane_doe'), 'Hank', 'Thomas', 'hank.thomas@example.com', '123-546-8790', 9876543218, '131 Main St', 'hank_photo.jpg'),
((SELECT id FROM Users WHERE username='jane_doe'), 'Ivy', 'Moore', 'ivy.moore@example.com', '213-645-8790', 9876543219, '132 Main St', 'ivy_photo.jpg');
