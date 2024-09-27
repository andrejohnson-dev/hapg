import { PortalCard } from "../../PortalPageComponent/PortalCard/PortalCard";
import { useChartConfig } from "../../../../hooks/chart-config-hook";
import { transformWithSchema } from "../../../../utils/data-transformer";
import Skeleton from "react-loading-skeleton";
import { BarChart } from "../../PortalChartComponent/BarChart";
import { useDataContext } from "../../../../hooks/data-hook";

export const UserByDeviceModelCard = () => {
    
    const { isDataState } = useDataContext(); // Access filtered data from context
    const data = isDataState.technicalDataFilteredByDate; // Use filtered data
    console.log(data)
    const singleColor = '#3366CC'; // Define a single color for all columns

    const { config: barChartOptions } = useChartConfig(
        'BarChart',
        'Device Model',
        'Users',
        '',
        { minValue: 0 },
        [singleColor],
        false
    );

    if (!data || !data.length) {
        return <Skeleton height={200} width='100%' />;
    }

    // Aggregate data by operating system
    const dataMap = new Map();

    data.forEach((item) => {
        const target = item.mobileDeviceModel|| 'Unknown';
        const count = Number(item.totalUsers);

        if (!dataMap.has(target)) {
            dataMap.set(target, { target, totalUsers: 0 });
        }

        const targetedData = dataMap.get(target);
        targetedData.totalUsers += count;
    });

    // Sort the aggregated data in descending order by totalUsers
    const aggregatedData = Array.from(dataMap.values()).sort((a, b) => b.totalUsers - a.totalUsers);

    // Format the aggregated data for chart rendering
    const chartData = [
        ['Device Model', 'Users'], // Column headers for the chart
        ...aggregatedData.map(item => [item.target, item.totalUsers]) // Map OS and user count
    ];

    return (
        <PortalCard
            cardTitle="Device Model"
            toolTipText="The mobile device model name (examples: iPhone X or SM-G950F)."
       cardFooter='Footer text here ---'
       >
            {chartData ? (
                <BarChart data={chartData} options={barChartOptions} />
            ) : (
                <Skeleton height={200} width='100%' />
            )}
        </PortalCard>
    );
};