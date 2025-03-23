import {create} from 'zustand';

interface PageStore {
	currentPage: string;
	setCurrentPage: (currentPage: string) => void;
}

const DEFAULT_PAGE = "Main";

export const usePageStore = create<PageStore>((set) => ({
	currentPage: DEFAULT_PAGE,
	setCurrentPage: (currentPage) => set({currentPage}),
}));
