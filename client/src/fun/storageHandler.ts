import Amplify, { Storage, API } from "aws-amplify";
import config from "../aws-exports";
import * as mutations from "../graphql/mutations";
import * as queries from "../graphql/queries";
import { GraphQLOptions } from "@aws-amplify/api-graphql";
import { IPicture } from "../hooks/Picture";

Amplify.configure(config);

//Exports
//
//
export const uploadPictures = async (
  picture: File | undefined,
  title: string,
  description: string
): Promise<void> => {
  if (picture) {
    console.log("Voy a subir",picture);
    const key: string = await uploadFile(picture);
    await writeDb(key, title, description);
  }
};

export const getPictures = async (): Promise<IPicture[]> => {
  const options: GraphQLOptions = {
    query: queries.listPictures,
  };

  const res: any = await API.graphql(options);
  let arr: IPicture[] = res.data.listPictures.items;
  console.log("My res",arr)
  const newArr = await Promise.all(arr.map(async(i) => {
    const  newSrc = await  Storage.get(i.src);

    const pic:IPicture = {
      id:i.id,
      description:i.description,
      title:i.title,
      src:newSrc.toString()
    };
    return pic;
  }));
  console.log("The new",newArr)
  return newArr;
};

//Internal
//
//

const uploadFile = async (file: File): Promise<string> => {
  const key: any = await Storage.put(file.name, file);
  //const src: Object = await 
  return key.key;
};
const writeDb = async (
  key: string,
  title: string,
  description: string
): Promise<void> => {
  const picture: Object = {
    title: title,
    description: description,
    src: key,
  };
  const options: GraphQLOptions = {
    query: mutations.createPicture,
    variables: {
      input: picture,
    },
  };

  API.graphql(options);
};