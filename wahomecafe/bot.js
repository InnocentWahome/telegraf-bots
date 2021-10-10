require("dotenv").config();
const Telegraf = require("telegraf");
const bot = new Telegraf(process.env.TOKEN);

//starting block
bot.command("start", (ctx) => {
  console.log(ctx.from);
  bot.telegram.sendMessage(
    ctx.chat.id,
    "Welcome to Wahome Cafe, a simple way to communicate with us and place your orders.\n\nTo get stared please type 'Begin'.",
    {}
  );
});

//User types in Begin to start the session
bot.hears("Begin", (ctx) => {
  console.log(ctx.from);
  bot.telegram.sendMessage(
    ctx.chat.id,
    "I am Wahome Chef, the Wahome Cafe bot,\nHow can I help you today?",
    {
      reply_markup: {
        inline_keyboard: [
          [{ text: "Order Something Now", callback_data: "orders" }],
          [{ text: "Give us Your Feedback", callback_data: "feedback" }],
          [{ text: "Other", callback_data: "help" }],
        ],
      },
    }
  );
});

// Keyboard layout for requesting phone number and location
const requestPhoneKeyboard = {
  reply_markup: {
    one_time_keyboard: true,
    keyboard: [
      [
        {
          text: "My phone number",
          request_contact: true,
          one_time_keyboard: true,
        },
      ],
      ["Cancel"],
    ],
  },
};

// ordering block
bot.action("orders", (ctx, next) => {
  console.log(ctx.from);
  bot.telegram.sendMessage(
    ctx.chat.id,
    "Can we get access to your phone number?",
    requestPhoneKeyboard
  );
});
//taking your contact details
//ask what they want
bot.on("contact", (ctx) => {
  bot.telegram.sendMessage(
    ctx.chat.id,
    "Your information has been saved for payment and delivery services.",
    requestPhoneKeyboard
  );
  console.log(ctx.from);
  let priceMessage = `What will you be having today?`;
  ctx.deleteMessage();
  bot.telegram.sendMessage(ctx.chat.id, priceMessage, {
    reply_markup: {
      inline_keyboard: [
        [
          { text: "Meals and Desserts", callback_data: "food" },
          { text: "Beverages and Refreshments", callback_data: "drinks" },
        ],
      ],
    },
  });
});

bot.action("food", (ctx) => {
  bot.telegram.sendPhoto(ctx.chat.id, { source: "res/food.png" });
});

bot.action("drinks", (ctx) => {
  bot.telegram.sendPhoto(ctx.chat.id, { source: "res/food.png" });
});

bot.hears("001", (ctx) => {
  console.log(ctx.from);
  let priceMessage = `Great, Your total pay will be kes 350`;
  ctx.deleteMessage();
  bot.telegram.sendMessage(ctx.chat.id, priceMessage, {
    reply_markup: {
      inline_keyboard: [
        [
          { text: "Pay on Delivery", callback_data: "delivery" },
          { text: "Mobile Money", callback_data: "mobile" },
        ],
      ],
    },
  });
});

bot.hears("002", (ctx) => {
  console.log(ctx.from);
  let priceMessage = `Great, Your total pay will be kes 450`;
  ctx.deleteMessage();
  bot.telegram.sendMessage(ctx.chat.id, priceMessage, {
    reply_markup: {
      inline_keyboard: [
        [
          { text: "Pay on Delivery", callback_data: "delivery" },
          { text: "Mobile Money", callback_data: "mobile" },
        ],
      ],
    },
  });
});

bot.hears("003", (ctx) => {
  console.log(ctx.from);
  let priceMessage = `Great, Your total pay will be kes 500`;
  ctx.deleteMessage();
  bot.telegram.sendMessage(ctx.chat.id, priceMessage, {
    reply_markup: {
      inline_keyboard: [
        [
          { text: "Pay on Delivery", callback_data: "delivery" },
          { text: "Mobile Money", callback_data: "mobile" },
        ],
      ],
    },
  });
});

bot.hears("004", (ctx) => {
  console.log(ctx.from);
  let priceMessage = `Great, Your total pay will be kes 600`;
  ctx.deleteMessage();
  bot.telegram.sendMessage(ctx.chat.id, priceMessage, {
    reply_markup: {
      inline_keyboard: [
        [
          { text: "Pay on Delivery", callback_data: "delivery" },
          { text: "Mobile Money", callback_data: "mobile" },
        ],
      ],
    },
  });
});

bot.hears("pine", (ctx) => {
  console.log(ctx.from);
  let priceMessage = `Great, Your total pay will be 100`;
  ctx.deleteMessage();
  bot.telegram.sendMessage(ctx.chat.id, priceMessage, {
    reply_markup: {
      inline_keyboard: [
        [
          { text: "Pay on Delivery", callback_data: "delivery" },
          { text: "Mobile Money", callback_data: "mobile" },
        ],
      ],
    },
  });
});

bot.hears("apple", (ctx) => {
  console.log(ctx.from);
  let priceMessage = `Great, Your total pay will be kes 100`;
  ctx.deleteMessage();
  bot.telegram.sendMessage(ctx.chat.id, priceMessage, {
    reply_markup: {
      inline_keyboard: [
        [
          { text: "Pay on Delivery", callback_data: "delivery" },
          { text: "Mobile Money", callback_data: "mobile" },
        ],
      ],
    },
  });
});

bot.hears("berry", (ctx) => {
  console.log(ctx.from);
  let priceMessage = `Great, Your total pay will be kes 100`;
  ctx.deleteMessage();
  bot.telegram.sendMessage(ctx.chat.id, priceMessage, {
    reply_markup: {
      inline_keyboard: [
        [
          { text: "Pay on Delivery", callback_data: "delivery" },
          { text: "Mobile Money", callback_data: "mobile" },
        ],
      ],
    },
  });
});

bot.hears("orange", (ctx) => {
  console.log(ctx.from);
  let priceMessage = `Great, Your total pay will be kes 350`;
  ctx.deleteMessage();
  bot.telegram.sendMessage(ctx.chat.id, priceMessage, {
    reply_markup: {
      inline_keyboard: [
        [
          { text: "Pay on Delivery", callback_data: "delivery" },
          { text: "Mobile Money", callback_data: "mobile" },
        ],
      ],
    },
  });
});
bot.hears("mango", (ctx) => {
  console.log(ctx.from);
  let priceMessage = `Great, Your total pay will be kes 100`;
  ctx.deleteMessage();
  bot.telegram.sendMessage(ctx.chat.id, priceMessage, {
    reply_markup: {
      inline_keyboard: [
        [
          { text: "Pay on Delivery", callback_data: "delivery" },
          { text: "Mobile Money", callback_data: "mobile" },
        ],
      ],
    },
  });
});

bot.action("delivery", (ctx) => {
  console.log(ctx.from);
  bot.telegram.sendMessage(
    ctx.chat.id,
    "Thank you for buying with us, our rider will be there in a moment please make sure you have the right amount with you to avoid imconvienience.Enjoy your delicacies ,hope to see you soon!",
    {}
  );
});

bot.action("mobile", (ctx) => {
  console.log(ctx.from);
  bot.telegram.sendMessage(
    ctx.chat.id,
    "please reply with the transcation code here, starting with MPESA or AIRTEL MONEY. The paybill number is 098098 account number is your name",
    {}
  );
});

bot.hears(["MPESA", "AIRTEL MONEY"], (ctx) => {
  bot.telegram.sendMessage(
    ctx.chat.id,
    "Thank you for buying with us.Enjoy your delicacies, hope to see you soon!",
    {}
  );
});

//help block
bot.action("help", (ctx) => {
  console.log(ctx.from);
  let priceMessage = `please choose one option that you prefer`;
  ctx.deleteMessage();
  bot.telegram.sendMessage(ctx.chat.id, priceMessage, {
    reply_markup: {
      inline_keyboard: [
        [
          { text: "TENDER", callback_data: "TENDER" },
          { text: "VACANCY", callback_data: "VACANCY" },
        ],

        [{ text: "Back to Menu", callback_data: "Begin" }],
      ],
    },
  });
});

bot.action("VACANCY", (ctx) => {
  bot.telegram.sendPhoto(ctx.chat.id, { source: "res/vacancy.png" });
});

bot.action("TENDER", (ctx) => {
  bot.telegram.sendPhoto(ctx.chat.id, { source: "res/tender.png" });
});

//feedback block
bot.action("feedback", (ctx) => {
  console.log(ctx.from);
  let priceMessage = `Select either to give feedback on`;
  ctx.deleteMessage();
  bot.telegram.sendMessage(ctx.chat.id, priceMessage, {
    reply_markup: {
      inline_keyboard: [
        [
          { text: "Mpishi bot", callback_data: "Bot" },
          { text: "Wahome Cafe", callback_data: "Restaraunt" },
        ],

        [{ text: "Back to Menu", callback_data: "Begin" }],
      ],
    },
  });
});
bot.action("Bot", (ctx) => {
  console.log(ctx.from);
  bot.telegram.sendMessage(
    ctx.chat.id,
    "Tell us how you think Mpishi bot can be improved.",
    {}
  );
});
bot.action("Restaraunt", (ctx) => {
  console.log(ctx.from);
  bot.telegram.sendMessage(
    ctx.chat.id,
    "Kindly tell us how we can improve the services of our restaurant.",
    {}
  );
});
bot.hears("MENU", (ctx) => {
  bot.telegram.sendPhoto(ctx.chat.id, { source: "res/food.png" });
});

bot.launch();
