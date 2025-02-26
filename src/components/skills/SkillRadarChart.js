import React from 'react';
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
} from 'chart.js';
import { Radar } from 'react-chartjs-2';
import styled from 'styled-components';

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

const SkillRadarChart = ({ skills, title }) => {
  const labels = skills.map(skill => skill.name);
  const data = skills.map(skill => skill.level);

  const chartData = {
    labels,
    datasets: [
      {
        label: title,
        data,
        backgroundColor: 'rgba(59, 130, 246, 0.2)',
        borderColor: 'rgba(59, 130, 246, 1)',
        borderWidth: 2,
        pointBackgroundColor: 'rgba(59, 130, 246, 1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(59, 130, 246, 1)',
      },
    ],
  };

  const options = {
    scales: {
      r: {
        angleLines: {
          color: 'rgba(255, 255, 255, 0.15)',
        },
        grid: {
          color: 'rgba(255, 255, 255, 0.15)',
        },
        pointLabels: {
          color: '#F3F4F6',
          font: {
            size: 12,
            family: "'Inter', sans-serif",
          },
        },
        ticks: {
          backdropColor: 'transparent',
          color: '#F3F4F6',
          showLabelBackdrop: false,
          font: {
            size: 10,
          },
        },
        min: 0,
        max: 100,
        beginAtZero: true,
      },
    },
    plugins: {
      legend: {
        display: true,
        position: 'top',
        labels: {
          color: '#F3F4F6',
          font: {
            size: 14,
            family: "'Inter', sans-serif",
          },
        },
      },
      tooltip: {
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        titleFont: {
          size: 13,
        },
        bodyFont: {
          size: 12,
        },
        padding: 10,
        displayColors: false,
        callbacks: {
          label: function(context) {
            return `Proficiency: ${context.raw}%`;
          }
        }
      },
    },
    elements: {
      line: {
        tension: 0.2,
      },
    },
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <ChartContainer>
      <ChartTitle>{title}</ChartTitle>
      <RadarContainer>
        <Radar data={chartData} options={options} />
      </RadarContainer>
    </ChartContainer>
  );
};

const ChartContainer = styled.div`
  background-color: ${({ theme }) => theme.cardBackground};
  border-radius: 10px;
  padding: 1.5rem;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const ChartTitle = styled.h3`
  font-size: 1.3rem;
  margin-bottom: 1.5rem;
  text-align: center;
  color: ${({ theme }) => theme.text};
`;

const RadarContainer = styled.div`
  flex-grow: 1;
  height: 300px;
`;

export default SkillRadarChart;
