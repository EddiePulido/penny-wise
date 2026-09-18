const crypto = require('crypto')

async function createInviteCode() {
  const code = crypto.randomBytes(3).toString('hex').toUpperCase(); 

  try {
    const newInvite = await Invite.create({ code, expiresAt });
    return newInvite.code;
  } catch (error) {
    if (error.code === 11000) return createInviteCode(daysValid); 
    throw error;
  }
}

module.exports = { createInviteCode }
