import s from "./Legend.module.css";

type PropsType = {
	name: string;
	value: number;
	color: string;
	sum: number;
};

export const Legend: React.FC<PropsType> = ({ name, value, color, sum }) => {
	const percent = (value / sum) * 100;

	return (
		<>
			{value > 0 && (
				<div className={s.legendEl}>
					<div className={s.marker} style={{ backgroundColor: color }}></div>
					{name}: {value} ({percent.toFixed(2)} %)
				</div>
			)}
		</>
	);
};
