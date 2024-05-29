import { Request, Response } from 'express';
import { Contact } from '../models/contact.model'; // Ajusta la ruta según la estructura de tu proyecto

// Crear un contacto
export const createContact = async (req: Request, res: Response): Promise<void> => {
  try {
    const { userId, firstName, lastName, email, phone, cellPhone, address, photo } = req.body;
    const contact = await Contact.create({ userId, firstName, lastName, email, phone, cellPhone, address, photo });
    res.status(201).json(contact);
  } catch (error) {
    console.error('Error al crear contacto:', error);
    res.status(500).send('Error al crear contacto');
  }
};

// Obtener todos los contactos
export const getContacts = async (req: Request, res: Response): Promise<void> => {
  try {
    const contacts = await Contact.findAll();
    res.status(200).json(contacts);
  } catch (error) {
    console.error('Error al obtener contactos:', error);
    res.status(500).send('Error al obtener contactos');
  }
};

// Obtener un contacto por ID
export const getContactById = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const contact = await Contact.findByPk(id);
    if (contact) {
      res.status(200).json(contact);
    } else {
      res.status(404).send('Contacto no encontrado');
    }
  } catch (error) {
    console.error('Error al obtener contacto:', error);
    res.status(500).send('Error al obtener contacto');
  }
};

// Actualizar un contacto
export const updateContact = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const { userId, firstName, lastName, email, phone, cellPhone, address, photo } = req.body;

    const contact = await Contact.findByPk(id);
    if (contact) {
      contact.userId = userId;
      contact.firstName = firstName;
      contact.lastName = lastName;
      contact.email = email;
      contact.phone = phone;
      contact.cellPhone = cellPhone;
      contact.address = address;
      contact.photo = photo;

      await contact.save();

      res.status(200).json(contact);
    } else {
      res.status(404).send('Contacto no encontrado');
    }
  } catch (error) {
    console.error('Error al actualizar contacto:', error);
    res.status(500).send('Error al actualizar contacto');
  }
};

// Eliminar un contacto
export const deleteContact = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const contact = await Contact.findByPk(id);
    if (contact) {
      await contact.destroy();
      res.status(204).send();
    } else {
      res.status(404).send('Contacto no encontrado');
    }
  } catch (error) {
    console.error('Error al eliminar contacto:', error);
    res.status(500).send('Error al eliminar contacto');
  }
};

export default {
    createContact,
    getContacts,
    getContactById,
    updateContact,
    deleteContact,
  };