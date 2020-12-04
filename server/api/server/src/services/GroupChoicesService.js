import db from "../../../../models/index.js";

class GroupChoicesService {
    static async getAllChoices() {
        try {
            // console.log(db.GroupChoices);
            return await db.GroupChoices.findAll();
          } catch (error) {
            throw error;
          }
    }

    static async getGroupChoices(groupIdFK) {
        try {
            const choices = await db.GroupChoices.findAll({
                where: {groupIdFK: Number(groupIdFK)}
              });
              return choices;
          } catch (error) {
            throw error;
          }
    }
    

    static async createGroupChoice(choice) {
        try {
       
          const request = await db.GroupChoices.create({
            movieId: choice.movieId,
            groupIdFK: choice.groupIdFK
          });
          
          return request;
          } catch (error) {
            throw error;
          }
    }
    static async deleteChoice(groupChoice) {
      console.log(groupChoice);
        try {
            const choiceToDelete = await db.GroupChoices.findOne({
              where: { 
                groupIdFK: Number(groupChoice.groupIdFK),
                movieId: Number(groupChoice.movieId)
              },
            });
      
            if (choiceToDelete) {
            return await db.UserChoices.destroy({
                where: { id: Number(choiceToDelete.id) },
              });
            }
          } catch (error) {
            throw error;
          }
    }
}
export default GroupChoicesService;