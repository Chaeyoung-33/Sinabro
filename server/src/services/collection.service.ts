import CollectionRepository from "@src/repository/collection.repository";
import { Inject, Service } from "typedi";

@Service()
class CollectionService {
  @Inject() private readonly collectionRepository: CollectionRepository;
  async getAllCollectionService(user_id: number) {
    const collection = await this.collectionRepository.getAllCollection(
      user_id
    );
    return collection.map((item) => item.animal_id);
  }
}

export default CollectionService;
