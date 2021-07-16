import React from 'react';
import Story from './Story/Story';
import './StoryReel.css';

const img =
  'https://bi.im-g.pl/im/0b/a2/18/z25829387V,las--zdjecie-ilustracyjne---Od-3-kwietnia-obowiazu.jpg';

function StoryReel() {
  return (
    <div className="storyReel">
      <Story
        image={img}
        profileSrc="https://scontent-jnb1-1.xx.fbcdn.net/v/t1.18169-9/14632840_1185580928183477_4789432004504720726_n.jpg?_nc_cat=103&ccb=1-3&_nc_sid=174925&_nc_ohc=N4j8ygGCkkwAX_s_99f&_nc_ht=scontent-jnb1-1.xx&oh=c6b5cb55304c8f9e7f4eab285a11cd91&oe=60F329CF"
        title="Goon Deve3"
      />
      <Story
        image={img}
        profileSrc="https://avatars3.githubusercontent.com/u/30196405?s=460&u=6bd3c8280b827a0ea3f661fc7c0c65117b19bc61&v=4"
        title="Goon Deve3"
      />
      <Story
        image={img}
        profileSrc="https://avatars3.githubusercontent.com/u/30196405?s=460&u=6bd3c8280b827a0ea3f661fc7c0c65117b19bc61&v=4"
        title="Goon Deve3"
      />
      <Story
        image={img}
        profileSrc="https://avatars3.githubusercontent.com/u/30196405?s=460&u=6bd3c8280b827a0ea3f661fc7c0c65117b19bc61&v=4"
        title="Goon Deve3"
      />
      <Story
        image={img}
        profileSrc="https://avatars3.githubusercontent.com/u/30196405?s=460&u=6bd3c8280b827a0ea3f661fc7c0c65117b19bc61&v=4"
        title="Goon Deve3"
      />
    </div>
  );
}

export default StoryReel;
