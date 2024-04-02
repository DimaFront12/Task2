import styles from './App.module.css';
import data from './data.json';
import { useState } from 'react';
export const App = () => {
	const [steps, setSteps] = useState([...data]);
	const [activeIndex, SetActiveIndex] = useState(0);

	const handleNextClick = () => {
		SetActiveIndex(activeIndex + 1)
	};

	const handleBackClick = () => {
		SetActiveIndex(activeIndex - 1)
	};

	const handleReturnClick = () => {
		SetActiveIndex(0)
	};

	const isFirstStep = activeIndex === 0;
	const isLastStep = activeIndex === steps.length - 1;

	return (
		<div className={styles.container}>
			<div className={styles.card}>
				<h1>Инструкция по готовке пельменей</h1>
				<div className={styles.steps}>
					<div className={styles['steps-content']}>
						{steps[activeIndex].content}
					</div>
					<ul className={styles['steps-list']}>
						{steps.map((item, i) => (
							<li className={`${styles['steps-item']} ${activeIndex >= i && styles.done} ${activeIndex === i && styles.active}`} key={item.id}>
								<button className={styles['steps-item-button']} onClick={() => SetActiveIndex(i)}>
									{i + 1}
								</button>
								{item.title}
							</li>
						))}
					</ul>
					<div className={styles['buttons-container']}>
						<button className={styles.button} disabled={isFirstStep} onClick={handleBackClick}>Назад</button>
						<button className={styles.button} onClick={!isLastStep ? handleNextClick : handleReturnClick}>
							{!isLastStep ? "Далее" : "Начать сначала"}
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};
