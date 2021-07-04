import Image from 'next/image';
import Link from 'next/link';
import { Work } from 'lib/microcms';

type Props = {
  work: Work,
}

export default function WorkItem(props: Props) {
  const { work } = props;

  const width = 300;
  const height = 50;
  const quality = 100;

  return (
    <Link href={`/works/${work.id}`}>
      <a>
        <Image
          src={`${work.icon.url}?w=${width}&h=${height}&fit=crop&q=${quality}`}
          quality={quality}
          alt={work.title}
          width={width}
          height={height}
        />
      </a>
    </Link>
  );
}
