import ArcGalleryHero from "@/components/ArcGalleryHero";

const Index = () => {
  const images = [
    "https://cdn.poehali.dev/projects/a7c94528-3b59-4791-a10e-5400a06a19b7/files/ffad8e51-544a-4606-bbb7-3d40cdb3a4a5.jpg",
    "https://cdn.poehali.dev/projects/a7c94528-3b59-4791-a10e-5400a06a19b7/files/4653f0fa-1813-4101-b8b2-6904a3782440.jpg",
    "https://cdn.poehali.dev/projects/a7c94528-3b59-4791-a10e-5400a06a19b7/files/c336cdc3-9550-4f2a-b968-04d3051731cb.jpg",
    "https://cdn.poehali.dev/projects/a7c94528-3b59-4791-a10e-5400a06a19b7/files/4549c449-4ef8-4d3e-9b39-573d6e1526ab.jpg",
    "https://cdn.poehali.dev/projects/a7c94528-3b59-4791-a10e-5400a06a19b7/files/3891eb98-9a4c-45be-bed3-98a6c2a16aa8.jpg",
    "https://cdn.poehali.dev/projects/a7c94528-3b59-4791-a10e-5400a06a19b7/files/d008d088-77b3-4304-a5a8-153fdac68b1c.jpg",
  ];

  return (
    <main className="relative min-h-screen bg-background">
      <ArcGalleryHero
        images={images}
        startAngle={20}
        endAngle={160}
        radiusLg={480}
        radiusMd={360}
        radiusSm={260}
        cardSizeLg={120}
        cardSizeMd={100}
        cardSizeSm={80}
        className="pt-16 pb-16 md:pt-20 md:pb-20 lg:pt-24 lg:pb-24"
      />
    </main>
  );
};

export default Index;