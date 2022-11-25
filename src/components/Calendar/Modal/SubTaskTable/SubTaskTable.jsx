import Default from "static/img/DefaultAva.svg";

import ComplicatedSubTask from "./CompletedSubTask";
import { AvatarUser, NameText, Subs, TextTitle, UrgentContainer } from "./Styled";


const SubTaskTable = ({ SubTaskList }) => {
  return (
    <>
      {SubTaskList.map((SubTask) => {
        return (
          <Subs key={SubTask.id}>
            <TextTitle>{SubTask.title}</TextTitle>
            <div>
              <AvatarUser>
                {SubTask.performer.avatar == null ?
                  <img src={Default} alt="ExampleAva" />
                  :
                  <img alt="avatar" src={`http://192.168.100.30:8090/${SubTask.performer.avatar.path}`} />
                }
              </AvatarUser>
              <NameText>{SubTask.performer.name == null ? SubTask.performer.email : SubTask.performer.name}</NameText>
              <UrgentContainer>
                <ComplicatedSubTask importance={SubTask.importance} />
              </UrgentContainer>
            </div>
          </Subs>
        );
      })}
    </>
  );

};

export default SubTaskTable;