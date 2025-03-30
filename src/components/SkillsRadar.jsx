import { Radar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

const SkillsRadar = () => {
  const data = {
    labels: [
      'Machine Learning',
      'Cloud Computing',
      'Python',
      'Backend Development',
      'Computer Vision',
      'NLP',
    ],
    datasets: [
      {
        label: 'Skill Level',
        data: [95, 90, 95, 85, 90, 85],
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgb(54, 162, 235)',
        pointBackgroundColor: 'rgb(54, 162, 235)',
      },
    ],
  };

  const options = {
    scales: {
      r: {
        beginAtZero: true,
        max: 100,
        ticks: {
          stepSize: 20,
        },
      },
    },
  };

  return (
    <div style={{ width: '500px', height: '500px' }}>
      <Radar data={data} options={options} />
    </div>
  );
};

export default SkillsRadar;
