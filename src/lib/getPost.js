import db from "../data/db.json";
import technologies from "../data/technologies.json";

export default async function getPost() {
  return db.posts;
}

export async function getTechnology() {
  return technologies.techs;
}