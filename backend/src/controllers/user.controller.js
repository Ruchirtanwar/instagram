import followmodel from "../models/follow.model";

export async function followController(req, res) {
  const followerId = req.user.id;
  const followingId = req.params.userId;
  console.log(followingId);
  // conditions
  if (followerId === followingId) {
    return res.status(400).json({
      message: "you cant follow yourself",
    });
  }
  const existing = await followmodel.findOne({
    follower: followerId,
    following: followingId,
  });

  if (!existing) {
    await followmodel.create({
      follower: followerId,
      following: followingId,
    });
    return res.json({
      message: "following",
    });
  }

  // So what’s the difference?
  // 🎯 Using _id
  // ✔ fastest (indexed)
  // ✔ exact match
  // ✔ no ambiguity
  // ✔ safest

  // 🎯 Using follower + following
  // ✔ readable
  // ✔ works fine
  // ❗ but:
  // slightly heavier query
  // if duplicates exist → unpredictable deletion
  {
    // await followmodel.deleteOne({
    // follower:followerId,
    // following:followingId
    // })
    // or
    await followmodel.deleteOne({
      _id: existing._id,
    });
    return res.json({
      message: "unfollowed",
    });
  }
}
