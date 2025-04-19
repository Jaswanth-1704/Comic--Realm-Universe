import { faker } from "@faker-js/faker";
import { Post, User } from "@/types/feedTypes";

// Function to generate comic character avatars
const generateComicAvatar = (seed: string) => {
  const comicCharacters = [
    "https://i.pravatar.cc/300?img=1", // Superman-like
    "https://i.pravatar.cc/300?img=2", // Batman-like
    "https://i.pravatar.cc/300?img=3", // Wonder Woman-like
    "https://i.pravatar.cc/300?img=4", // Spider-Man-like
    "https://i.pravatar.cc/300?img=5", // Iron Man-like
    "https://i.pravatar.cc/300?img=6", // Captain America-like
    "https://i.pravatar.cc/300?img=7", // Black Widow-like
    "https://i.pravatar.cc/300?img=8", // Hulk-like
    "https://i.pravatar.cc/300?img=9", // Thor-like
    "https://i.pravatar.cc/300?img=10", // Flash-like
    "https://i.pravatar.cc/300?img=11", // Green Lantern-like
    "https://i.pravatar.cc/300?img=12", // Aquaman-like
  ];

  // Use the seed to consistently select the same avatar for the same character
  const seedNum = seed
    .split("")
    .reduce((acc, char) => acc + char.charCodeAt(0), 0);
  return comicCharacters[seedNum % comicCharacters.length];
};

// Function to generate comic illustration for post images
const generateComicIllustration = (seed: string, usedImages: Set<string>) => {
  // Mix of local images from public folder with consistent forward slashes
  const comicImages = [
    {
      path: "/iron-man.jpg",
      topic:
        "Suit up! The latest Iron Man armor is a technological marvel. The perfect blend of innovation and heroics! 🚀✨ #TonyStark #IronMan",
    },
    {
      path: "/Ant man.jpg",
      topic:
        "Ant-Man's quantum adventures never cease to amaze! Size doesn't matter when you've got this much heart. 🐜✨",
    },
    {
      path: "/Flash.jpg",
      topic:
        "The Scarlet Speedster in action! Barry Allen showing us why he's the fastest man alive. ⚡️💨",
    },
    {
      path: "/joker.jpg",
      topic:
        "The Clown Prince of Crime with that iconic smile. Some people just want to watch the world burn. 🃏😈",
    },
    {
      path: "/Superman.jpeg",
      topic:
        "The Man of Steel soaring through the skies! Hope never dies when Superman's around. 🦸‍♂️💫",
    },
    {
      path: "/Venom-vs-Spider-Man-e15759112123.jpg",
      topic:
        "Epic showdown! Spider-Man vs Venom - the eternal struggle between hero and symbiote. 🕷️👊",
    },
    {
      path: "/wonder-woman-new-comic-daniel-sa.jpg",
      topic:
        "Diana Prince showing why she's the strongest Amazon warrior! Wonder Woman forever! ⚔️👑",
    },
    {
      path: "/Thor.jpg",
      topic:
        "The God of Thunder wielding Mjolnir! Thor's might knows no bounds. ⚡🔨",
    },
    {
      path: "/Victor Doom.jpg",
      topic:
        "Doctor Doom stands supreme! Latveria's ruler showing his power. 👑⚔️",
    },
    {
      path: "/loki.jpg",
      topic:
        "The God of Mischief's latest scheme! What's Loki planning this time? 🪄✨",
    },
    {
      path: "/wolverine.jpg",
      topic: "The best there is at what he does! Logan unleashed! 🗡️🐺",
    },
    {
      path: "/vision.jpg",
      topic:
        "Vision contemplating the nature of humanity. The synthezoid's evolution continues. 🤖💭",
    },
    {
      path: "/Deadpool.jpg",
      topic: "Deadpool breaking the fourth wall again! Maximum effort! 🗡️😂",
    },
    {
      path: "/avengers-endgame-thanos-1.jpg",
      topic:
        "The Mad Titan himself! Thanos making the universe balanced, as all things should be. 💜✨",
    },
    {
      path: "/spider-man-beyond-the-spidervers.jpg",
      topic:
        "Swinging through the Spider-Verse! Miles showing why he's the perfect Spider-Man! 🕸️🎨",
    },
    {
      path: "/Batman_1_preview_2.jpg",
      topic:
        "The Dark Knight watching over Gotham! Batman's presence strikes fear into criminals. 🦇🌃",
    },
  ];

  // Filter out already used images
  const availableImages = comicImages.filter(
    (img) => !usedImages.has(img.path)
  );

  // If all images are used, return undefined
  if (availableImages.length === 0) {
    return undefined;
  }

  // Select a random available image
  const selectedImage =
    availableImages[Math.floor(Math.random() * availableImages.length)];
  usedImages.add(selectedImage.path);

  return { path: selectedImage.path, topic: selectedImage.topic };
};

// Create comic-based superhero usernames and names
const comicUsernames = [
  { name: "Bruce Wayne", username: "batman", publisher: "DC" },
  { name: "Clark Kent", username: "superman", publisher: "DC" },
  { name: "Diana Prince", username: "wonderwoman", publisher: "DC" },
  { name: "Barry Allen", username: "flash", publisher: "DC" },
  { name: "Hal Jordan", username: "greenlantern", publisher: "DC" },
  { name: "Peter Parker", username: "spiderman", publisher: "Marvel" },
  { name: "Tony Stark", username: "ironman", publisher: "Marvel" },
  { name: "Steve Rogers", username: "captainamerica", publisher: "Marvel" },
  { name: "Natasha Romanoff", username: "blackwidow", publisher: "Marvel" },
  { name: "Bruce Banner", username: "hulk", publisher: "Marvel" },
  { name: "Thor Odinson", username: "thor", publisher: "Marvel" },
  { name: "Wanda Maximoff", username: "scarletwitch", publisher: "Marvel" },
  { name: "Arthur Curry", username: "aquaman", publisher: "DC" },
  { name: "Victor Stone", username: "cyborg", publisher: "DC" },
  { name: "Scott Lang", username: "antman", publisher: "Marvel" },
];

// Create a set of consistent comic-themed users
export const generateUsers = (count: number = 15): User[] => {
  // Add Bruce Wayne as a fixed first user
  const bruceWayne: User = {
    id: "bruce-wayne-1",
    name: "Bruce Wayne",
    username: "brucewayne",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=bruce-wayne",
    verified: true,
    followers: faker.number.int({ min: 0, max: 100000 }),
    following: faker.number.int({ min: 0, max: 1000 }),
  };

  const otherUsers = Array.from({ length: count - 1 }, (_, index) => {
    const userInfo = comicUsernames[index % comicUsernames.length];

    return {
      id: faker.string.uuid(),
      name: userInfo.name,
      username: userInfo.username,
      avatar: generateComicAvatar(`${userInfo.username}-${index}`),
      verified: faker.datatype.boolean(0.3),
      followers: faker.number.int({ min: 0, max: 100000 }),
      following: faker.number.int({ min: 0, max: 1000 }),
    };
  });

  return [bruceWayne, ...otherUsers];
};

// Create comic-themed posts from our users
export const generatePosts = (users: User[], count: number = 20): Post[] => {
  const usedImages = new Set<string>();

  // Helper function to create a post
  const createPost = (
    id: string,
    user: User,
    imagePath: string,
    content: string,
    likes: number,
    comments: number,
    reposts: number
  ): Post => ({
    id,
    user,
    content,
    images: [imagePath],
    likes,
    comments,
    reposts,
    liked: false,
    bookmarked: false,
    createdAt: new Date(Date.now() - Math.random() * 7 * 24 * 60 * 60 * 1000), // Random date within last week
  });

  const posts: Post[] = [];

  // Generate posts with unique images
  for (let i = 0; i < Math.min(count, 15); i++) {
    const user = users[i % users.length];
    const image = generateComicIllustration(
      `post-${i}-${user.username}`,
      usedImages
    );

    if (image) {
      posts.push(
        createPost(
          faker.string.uuid(),
          user,
          image.path,
          image.topic,
          faker.number.int({ min: 100, max: 10000 }),
          faker.number.int({ min: 10, max: 500 }),
          faker.number.int({ min: 5, max: 300 })
        )
      );
    }
  }

  return posts.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
};
