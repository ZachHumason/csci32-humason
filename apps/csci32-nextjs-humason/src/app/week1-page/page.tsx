import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="flex justify-between gap-4 m-6 items-center">
        <div className="m-12">
          <h1 className="text-3xl font-bold mb-4 text-rose-600">Week 1</h1>
          <main className="bg-gray-100 rounded-md p-6 shadow-md text-xl">Temporary content</main>
          <main className="bg-gray-100 rounded-md p-6 shadow-md text-xl">
            Efficitur posuere adipiscing luctus dignissim ex euismod lacinia habitasse finibus. Vehicula tristique amet
            adipiscing leo integer. Blandit volutpat himenaeos magna, mauris nostra pulvinar primis. Eros id nam
            pulvinar; consequat porta amet mattis vivamus. Nisl semper praesent laoreet nulla donec torquent purus
            magnis. Et lectus vivamus; ullamcorper nisi lacus ut quam. Iaculis vitae cras laoreet tellus proin pretium
            aliquam.
          </main>
        </div>
      </div>
      <Footer />
    </div>
  )
}
