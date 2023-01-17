import User from "../models/User";

/* READ */
export const getUser = async (req, res) => {
    try {

        // Find user using id
        const { id } = req.params;
        const user = await User.findById(id);
        res.status(200).json(user);
    } catch (err)
    {
        res.status(404).json({ error: err.message });
    }
};

export const getUserFriends = async (req, res) => {
    try{
        // Find user using id
        const { id } =  req.params;
        const user = await User.findById(id);

        // Find all friends using id and map them to friends field
        const friends = await Promise.all(
            user.friends.map((id) => User.findById(id))
        );
        
        const formattedFriends = friends.map(
            ({ _id, firstName, lastName, occupation, location, picturePath }) => {
                return { _id, firstName, lastName, occupation, location, picturePath };
            }
        );
        res.status(200).json(formattedFriends);
    } catch (err) {
        res.status(404).json({ error: err.message })
    }
};

/* UPDATE/PATCH */

export const addRemoveFriend = async (req, res) => {
    try {
        // Find user and their friend
        const { id, friendId } = req.params;
        const user = await User.findById(id);
        const friend = await User.findById(friendId);

        // If friend is already a friend to user
        if( user.friends.includes(friendId) ) {

            // Remove friend from user's friends list
            user.friends = user.friends.filter((id) => id !== friendId);
            // Remove user from friend's friend list
            friend.friends = friend.friends.filter((id) => id !== friendId);
        } else {

            // Add friendship
            user.friends.push(friendId);
            friend.friends.push(id);
        }
        await user.save();
        await friend.save();

        // Find all friends using id and map them to friends field
        const friends = await Promise.all(
            user.friends.map((id) => User.findById(id))
        );
        
        const formattedFriends = friends.map(
            ({ _id, firstName, lastName, occupation, location, picturePath }) => {
                return { _id, firstName, lastName, occupation, location, picturePath };
            }
        );
        
        res.status(200).json(formattedFriends);
    } catch (err) {
        res.status(404).json({ error: err.message });
    }
};