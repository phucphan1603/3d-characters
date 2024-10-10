import { create } from "zustand";

const useConfiguratorStore = create((set) => ({
  categories: [],
  currentCategory: null,
  assets: [],
  fetchCategories: async () => {},
}));
