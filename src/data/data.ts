export type ProgressItem = {
	name: string;
	color: string;
	value: number;
};

export const progressData: Array<ProgressItem> = [
	{ name: "Sold", color: "#BD1FBE", value: 677 },
	{ name: "Got free", color: "#FC64FF", value: 23 },
	{ name: "Burned", color: "#18E246FF", value: 202 },
	{ name: "Free float", color: "#9EA0B5FF", value: 323 },
	{ name: "Drowned", color: "#09F", value: 228 },
];
