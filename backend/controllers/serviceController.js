import Service from "../models/Service.js";

export const getServices = async (req, res) => {
  const services = await Service.find();
  res.json(services);
};

export const createService = async (req, res) => {
  const { title, description, icon } = req.body;
  const service = new Service({ title, description, icon });
  await service.save();
  res.status(201).json(service);
};

export const updateService = async (req, res) => {
  const { title, description, icon } = req.body;
  const service = await Service.findByIdAndUpdate(req.params.id, { title, description, icon }, { new: true });
  res.json(service);
};

export const deleteService = async (req, res) => {
  await Service.findByIdAndDelete(req.params.id);
  res.json({ message: "Service deleted" });
};
