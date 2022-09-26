import { ProgressItem } from "../data/data";
import { Legend } from "./Legend/Legend";
import s from "./ProgressBar.module.css";

type PropsType = {
	progressData: Array<ProgressItem>;
	height: number;
	width: number;
};

export const ProgressBar: React.FC<PropsType> = ({ progressData, height, width }) => {
	let sum = 0;
	for (let el of progressData) sum += el.value;

	let percentages: Array<number> = [];
	for (let i = 0; i < progressData.length; i++) {
		percentages.push((progressData[i].value / sum) * 100);
	}

	let progressBarElems = [];
	for (let i = 0; i < progressData.length; i++) {
		for (let j = 0; j < percentages[i]; j++) {
			progressBarElems.push(
				<div
					key={j + progressData[i].color + i}
					className={s.progressBar_el}
					style={{
						width: width / 100,
						height: height,
						backgroundColor: progressData[i].color,
					}}>
				</div>
			);
		}
	}

	const legendData = progressData.map((el) => (
		<Legend
			key={el.name + el.value}
			name={el.name}
			color={el.color}
			value={el.value}
			sum={sum}
		/>
	));

	return (
		<div className={s.wrapper}>
			<div className={s.progressBar} style={{ width: width, height: height }}>
				{progressBarElems}
			</div>
			<div className={s.legend}>
				{legendData}
			</div>
		</div>
	);
};
