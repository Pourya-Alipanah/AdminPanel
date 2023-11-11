import { Flex, Spinner, Text } from "@chakra-ui/react";
// eslint-disable-next-line no-unused-vars
import { Chart as ChartJS } from "chart.js/auto";
import { Bar, Pie } from "react-chartjs-2";

const StatisticsLoading = () => {
  return (
    <>
      <Flex>
        <Flex color={"siteTheme.white"} alignItems={"center"} gap={2}>
          <Text>آمار دوره ها</Text>
          <Spinner size="sm" />
        </Flex>
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
                      size: "14px",
                    },
                  },
                },
              },
            }}
            data={{
              labels: [
                "ــــــــــــــــــــــــــــــــــــــــــــــــــــــــــ",
                "ــــــــــــــــــــــــــــــــــــــــــــــــــــــــــ",
                "ــــــــــــــــــــــــــــــــــــــــــــــــــــــــــ",
              ],
              datasets: [
                {
                  id: 1,
                  label: "تعداد نظرات",
                  data: [5, 5, 5],
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
              labels: ["loading","loading","loading"],
              datasets: [
                {
                  id: 1,
                  label: "ـــــــــــــــــــــــــــــــــــــــــــ",
                  data: [15, 10, 5],
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

export default StatisticsLoading;
