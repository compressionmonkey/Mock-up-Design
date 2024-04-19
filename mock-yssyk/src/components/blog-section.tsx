import Image from 'next/image';

export default function BlogSection() {
  // Dummy data for the blog posts
  const blogPosts = [
    {
      title: 'Why We Love Webflow (And You Should, Too!)',
      summary: 'Delectus autem aspernatur: Rerum ea omnis qua nam. Assumenda minima vitae fuga quasi. Nihil et voluptatem. Sit enim rerum nam excepturi similique. Magni voluptas et enim culpa. Molestiae praesentium nostrum rerum. Qui atque impedit molestiae dolorem vitae laborum sit dolor. Omnis velit omnis un.',
      imgSrc: '/images/blog1.jpg',
    },
    {
      title: '7 Things About Web Design Your Boss Wants To Know',
      summary: 'Hic voluptatem dignissimos perferendis voluptatem corrupti omnis optio suscipit quidem. Sapiente ratione est ut q',
      imgSrc: '/images/blog2.jpg',
    },
    {
      title: '15 Best Blogs To Follow About Web Design',
      summary: 'Cumque odio velit aut distinctio sapiente velit perspiciatis alias consequatur. Rericiendis eum quia aliquid recusandae animi sint mollitia ut. Et dicta sint. Nihil reprehenderit aperiam numquam accusantium hic asperiores. Dolores sa',
      imgSrc: '/images/blog3.jpg',
    },
  ];

  return (
    <div className="container bg-white mx-auto my-8 p-4">
      <h2 className="text-center text-2xl font-bold uppercase mb-6">Blog</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {blogPosts.map((post, index) => (
          <div key={index} className="bg-white shadow-md rounded overflow-hidden">
            <Image src={post.imgSrc} alt={post.title} className="w-full h-48 object-cover"/>
            <div className="p-4">
              <h3 className="font-bold text-lg mb-2">{post.title}</h3>
              <p className="text-gray-700 text-base">{post.summary}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-8">
        <button className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800">More posts</button>
      </div>
    </div>
  );
}
