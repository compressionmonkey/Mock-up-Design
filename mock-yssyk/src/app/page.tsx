import BlogSection from "@/components/blog-section";
import Clients from "@/components/clients";
import FAQ from "@/components/faq";
import FurtherOffer from "@/components/furtheroffer";
import FurtherProductOffer from "@/components/furtherproductoffer";
import LiveStream from "@/components/livestream";
import ProductOffer from "@/components/productoffer";
import ProductOfferEncore from "@/components/productofferencore";
import Title from "@/components/title";
import Footer from "@/components/footer";

const dummyData= [
  { title: "yssyk", split: false, CTA: [{ title: "Blog" }] },
  { title: "Yssyk for all!", split: true, subtitle: "Become a better product designer.", text: "A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart.I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine.", 
    CTA: [{ title: "Enter Your Email", Action: "Send" }] },
  { title: "Clients", split: false, CTA: [{title: "", media: [{ url: "" }] }] }
];

// const mapData = (data) => data.map(({ title, subtitle, text, CTA, media }) => ({
//   title,
//   subtitle,
//   text,
//   CTA,
//   media
// }))

// const data = mapData(dummyData);
// console.log(data);

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="container mx-auto grid gap-4">
        {/* {dummyData.map((data, index) => (
          <Box key={index} {...data} />
        ))} */}
        <Title title={dummyData[0].title || 'Default Title'} />
        <ProductOffer title={dummyData[1].title || 'Default Title'} subtitle={dummyData[1].subtitle || 'Default Subtitle'} text={dummyData[1].text} CTA={dummyData[1].CTA || []} />
        <Clients title={dummyData[2].title || 'Default Title'} />
        <FurtherOffer />
        <FurtherProductOffer />
        <FAQ />
        <ProductOfferEncore />
        <LiveStream />
        <BlogSection />
        <Footer />
      </div>
    </main>
  );
}
