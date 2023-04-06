// create component for groups and import here
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from 'next/link'

async function retrieveGroups() {
  const response = await fetch('http://35.86.78.63:8000/group/retrieve-groups');
  return response; // Note: Can I make this response.json()?
}


function HomePage() {


  const [groups, setGroups] = useState();

  useEffect(() => {
    retrieveGroups().then(
      result => result.json()).then(
        data => {
          console.log(data.groups[0].id);
          setGroups(data.groups);
        }
      );
  }, []);

  return (
    <div className="flex flex-row justify-center gap-5">
      {groups?.map((group) => (
        <Link href={"/group/" + `${group.id}`}>
          <div className="flex flex-row bg-white gap-5 p-3 rounded-lg">
            <Image
              src={group.picture}
              alt="group photo"
              width={150}
              height={150}
            />
            <div className="flex flex-col">
              <span>
                {group.name}
              </span>
              <span>
                {group.location}
              </span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default HomePage
