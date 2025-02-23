import { Carousel } from "primereact/carousel";
import IkiQuantLanding from '~/assets/dash-images/landing-iki.png'
import IkiHistoricalPer from '~/assets/dash-images/hist-per.png'
import IkiViz from '~/assets/dash-images/iki-viz.png'
import BtDynamicForm from '~/assets/dash-images/bt-landing.png'
import BtMetrics from '~/assets/dash-images/bt-metrics.png'
import BtViz from '~/assets/dash-images/bt-viz.png'
import BtPortfolio from '~/assets/dash-images/bt-portfolio.png'

type Data = {
  title: string
  subtitle: string
  image: string
}


function ImageCarousel({ dataList }: {
  dataList: Data[]
}) {
  const DataTemplate = (data: Data) => {
    return <div className='flex flex-col items-center'>
      <img src={data.image} alt={data.title} className='' />
      <h1 className='text-2xl font-bold'>{data.title}</h1>
      <p className='text-lg'>{data.subtitle}</p>
    </div>
  }
  return <div>
    <Carousel value={dataList} itemTemplate={
      DataTemplate
    } />
  </div>
}

const ikiquantData: Data[] = [
  {
    title: 'Real time Data streaming & process control',
    subtitle: 'Realtime market data streaming and ability to monitor control trading processes from the dashboard.',
    image: IkiQuantLanding.src
  },
  {
    title: 'Historical strategy performance',
    subtitle: 'Strategy metrics are saved at the end of the day. Historical strategy data can be viewed and compared conveniently.',
    image: IkiHistoricalPer.src
  },
  {
    title: 'Strategy data visualization',
    subtitle: 'Visualize strategy performance and market data in the form of charts and graphs.',
    image: IkiViz.src
  }
]
export function IkiquantCarousel() {
  return <ImageCarousel dataList={ikiquantData} />
}

const btAppData: Data[] = [
// Dynamic form.
// I designed a custom form schema to dynamically generate forms based on the strategy selected.
// Metrics
// The raw trade books are processed and metrics are calculated to evaluate the strategy performance. And results are reactively calculated based on slippage and margin.
// Visualization
// Backtests are visualized to understand the strategy performance and market data in the form of charts and graphs.
// Comparing different strategies
// Dynamically run and merge trade books of different strategies to compare the performance

  {
    title: 'Dynamic Form',
    subtitle: 'I designed a custom form schema to dynamically generate forms based on the strategy selected.',
    image: BtDynamicForm.src
  },
  {
    title: 'Metrics',
    subtitle: 'The raw trade books are processed and metrics are calculated to evaluate the strategy performance. And results are reactively calculated based on slippage and margin.',
    image: BtMetrics.src
  },
  {
    title: 'Visualization',
    subtitle: 'Backtests are visualized to understand the strategy performance and market data in the form of charts and graphs.',
    image: BtViz.src
  },
  {
    title: 'Comparing different strategies',
    subtitle: 'Dynamically run and merge trade books of different strategies to compare the performance',
    image: BtPortfolio.src
  }


]

export function BtAppCarousel() {
  return <ImageCarousel dataList={btAppData} />
}
