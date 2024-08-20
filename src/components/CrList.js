import React from 'react';
import CreatorCard from './CreatorCard'; // Correct import
import '../App.css'; // Ensure this path is correct

const creators = {
  html: [
    {
      name: 'Code With Harry',
      photo: '/images/harry.jpeg',
      channelLink: 'https://youtu.be/BsDoLVMnmZs?si=jiPmuXG0zbwuW9HP'
    },
    {
      name: 'Apna College',
      photo: '/images/apna.png',
      channelLink: 'https://youtu.be/HcOc7P5BMi4?si=PcJ4zkISKCVzvTfK'
    },
    {
      name: 'Thapa Technical',
      photo: '/images/thapa.jpeg',
      channelLink: 'https://youtu.be/5ccq_nLHneE?si=2BorAoPVL_rxttuj'
    }
  ],
  css: [
    {
      name: 'Thapa Technical',
      photo: '/images/thapa.jpeg',
      channelLink: 'https://youtu.be/MSICFljRcb4?si=SGS8qG4010GoFpsP'
    },
    {
      name: 'Dave Gray',
      photo: '/images/dave.jpeg',
      channelLink: 'https://youtu.be/0W6qz0-aDaM?si=vUQfO_4-NjMKg4nH'
    },
    {
      name: 'Wscube Tech',
      photo: '/images/download.png',
      channelLink: 'https://youtu.be/B9FvD1L2hAQ?si=W9vJ6Q4tZ-nkrfNa'
    }
  ],
  javascript: [
    {
      name: 'Code With Harry',
      photo: '/images/harry.jpeg',
      channelLink: 'https://youtu.be/ER9SspLe4Hg?si=SwkCnSVAyTQ79qpd'
    },
    {
      name: 'Thapa Technical',
      photo: '/images/thapa.jpeg',
      channelLink: 'https://youtu.be/13gLB6hDHR8?si=xNrECyKpzl56Ik4o'
    },
    {
      name: 'SuperSimpleDev',
      photo: '/images/super.jpeg',
      channelLink: 'https://youtu.be/EerdGm-ehJQ?si=hBNGzipHi5VMCYY-'
    }
  ],
  reactjs: [
    {
      name: 'Codevolution',
      photo: '/images/code.jpeg',
      channelLink: 'https://youtu.be/QFaFIcGhPoM?si=7XlcwJZ4QVhhW3yM'
    },
    {
      name: 'Coder Dost',
      photo: '/images/dost.png',
      channelLink: 'https://youtu.be/6l8RWV8D-Yo?si=u4gyeW0ceLg4w0fK'
    },
    {
      name: 'Code Step By Step',
      photo: '/images/step by step.png',
      channelLink: 'https://youtu.be/9Tz2tY-ZEwQ?si=NW9FBQ5fNshHImBx'
    }
  ],
  extra: [
    {
      name: 'GitHub',
      photo: '/images/github.jpeg',
      channelLink: 'https://github.com'
    },
    {
      name: 'GitHub Desktop',
      photo: '/images/github desktop.jpeg',
      channelLink: 'https://desktop.github.com'
    },
    {
      name: 'VERCEL',
      photo: '/images/vercel.png',
      channelLink: 'https://vercel.com'
    }
  ]
};

function CrList({ language }) {
  const selectedCreators = creators[language] || [];

  return (
    <div className="creator-list">
      {selectedCreators.map((creator, index) => (
        <CreatorCard key={index} creator={creator} />
      ))}
    </div>
  );
}

export default CrList;
