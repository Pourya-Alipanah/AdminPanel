/* eslint-disable react/prop-types */
import { Flex, Text } from "@chakra-ui/react";
// eslint-disable-next-line no-unused-vars
import { Chart as ChartJS } from "chart.js/auto";
import { Bar, Pie } from "react-chartjs-2";
const StatisticsCharts = ({courseStatistics}) => {
  return (
    <>
      <Flex>
        <Text color={"siteTheme.white"}> آمار دوره ها </Text>
      </Flex>
      <Flex gap={12} flexDir={{ sm: "row", base: "column" }}>
        <Flex
          maxW={{ md: "300px", base: "250px" }}
          h={{ md: "300px", base: "250px" }}
        >
          <Pie
            options={{
              plugins: {
                title: {
                  display: true,
                  text: "تعداد امتیازات به تفکیک دوره",
                  color: "#EEEEEE",
                },
                legend: {
                  labels: {
                    color: "#EEEEEE",
                    font: {
                      size: "13px",
                    },
                  },
                },
              },
            }}
            data={{
              labels: courseStatistics.map((statistic)=>statistic.title),
              datasets: [
                {
                  id: 1,
                  label: "تعداد نظرات",
                  data: courseStatistics.map((statistic)=>statistic.numOfReviews),
                  backgroundColor: ["#005B41", "#E9B824", "#EF6262"],
                },
              ],
            }}
          />
        </Flex>
        <Flex
          maxW={{ md: "300px", base: "250px" }}
          h={{ md: "300px", base: "250px" }}
        >
          <Bar
            options={{
              responsive: true,
              maintainAspectRatio: false,
              scales: {
                x: {
                  grid: {
                    display: false,
                  },
                  ticks: {
                    display: false,
                  },
                },
                y: {
                  grid: {
                    color: "#32373D",
                  },
                },
              },
              plugins: {
                title: {
                  display: true,
                  text: "میانگین امتیازات دوره ها",
                  color: "#EEEEEE",
                },
                legend: {
                  labels: {
                    color: "#EEEEEE",
                    font: {
                      size: "15px",
                    },
                  },
                  fullSize: true,
                },
              },
            }}
            data={{
              labels: courseStatistics.map((statistic)=>statistic.title),
              datasets: [
                {
                  id: 1,
                  label: "میانگین امتیازات دوره ",
                  data: courseStatistics.map((statistic)=>statistic.averageReviewRating),
                  backgroundColor: ["#810034"],
                  borderColor: "#EEEEEE",
                  borderWidth: 2,
                },
              ],
            }}
          />
        </Flex>
      </Flex>
    </>
  );
};

export default StatisticsCharts;
