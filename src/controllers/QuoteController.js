// import transporter from '../services/sendMail.js';

export const requestQuote = async (req, res) => {
    try {
        const { name, phone, email, company, items } = req.body;

        if (!name || !phone || !email || !company || !Array.isArray(items) || items.length === 0) {
            return res.status(400).json({ message: "All fields and at least one item are required." });
        }

        // Compose email
        const itemList = items.map((item, idx) =>
            `<li>
                <b>${item.product?.name || "Product"}</b> (${item.product?.type || ""}, ${item.product?.category || ""})<br/>
                Weight: ${item.weight}kg, Qty: ${item.quantity}
            </li>`
        ).join("");

        const html = `
            <h2>New Quote Request</h2>
            <p><b>Name:</b> ${name}</p>
            <p><b>Phone:</b> ${phone}</p>
            <p><b>Email:</b> ${email}</p>
            <p><b>Company:</b> ${company}</p>
            <p><b>Requested Items:</b></p>
            <ul>${itemList}</ul>
        `;

        // await transporter.sendMail({
        //     from: process.env.MAIL_EMAIL,
        //     to: process.env.MAIL_EMAIL,
        //     subject: "New Quote Request",
        //     html,
        // });

        console.log(
            {
                from: process.env.MAIL_EMAIL,
                to: process.env.MAIL_EMAIL,
                subject: "New Quote Request",
                html,
            }
        );

        res.json({ message: "Quote request sent successfully." });
    } catch (error) {
        res.status(500).json({ message: "Failed to send quote request.", error: error.message });
    }
};
