import Box from "@/components/boxes";

const dummyData = [
  { Title: "yssyk", split: false, CTA: [{ name: "Blog" }] },
  { Title: "Yssyk for all!", split: true, subTitle: "Become a better product designer.", text: "A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart.I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine.", 
    CTA: [{ Title: "Enter Your Email", Action: "Send" }] },
  { Title: "Clients", split: false, CTA: [{ media: [{ url: "" }] }] }
];

const mapData = (data) => data.map(({ Title, subTitle, text, CTA, media }) => ({
  Title,
  subTitle,
  text,
  CTA,
  media
}))

const data = mapData(dummyData);
console.log(data);

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="container mx-auto grid gap-4">
        {dummyData.map((data, index) => (
          <Box key={index} {...data} />
        ))}
      </div>
    </main>
  );
}
