
export default function Contact() {
  return (
    <section id="contact" className="py-16 px-6 md:px-20 bg-white dark:bg-gray-900">
      <h2 className="text-4xl font-bold mb-10 border-b-4 inline-block border-blue-500 pb-2 dark:text-white">
          Contact
        </h2>

      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-5/12 space-y-6">
            <div className="flex items-start space-x-4">
              <i className="bi bi-geo-alt text-2xl text-blue-600"></i>
              <div>
                <h3 className="text-xl font-semibold text-gray-800">Address</h3>
                <p className="text-gray-600">Tunis</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <i className="bi bi-telephone text-2xl text-blue-600"></i>
              <div>
                <h3 className="text-xl font-semibold text-gray-800">Contact</h3>
                <p className="text-gray-600">55 158 591</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <i className="bi bi-envelope text-2xl text-blue-600"></i>
              <div>
                <h3 className="text-xl font-semibold text-gray-800">Email</h3>
                <p className="text-gray-600">Oumayma.metoui@gmail.com</p>
              </div>
            </div>

          
          </div>

          <div className="lg:w-7/12">
            <form action="forms/contact.php" method="post" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name-field" className="block text-sm text-gray-700 mb-1">
                    Nom
                  </label>
                  <input
                    type="text"
                    id="name-field"
                    name="name"
                    required
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="email-field" className="block text-sm text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email-field"
                    name="email"
                    required
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject-field" className="block text-sm text-gray-700 mb-1">
                  Sujet
                </label>
                <input
                  type="text"
                  id="subject-field"
                  name="subject"
                  required
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label htmlFor="message-field" className="block text-sm text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message-field"
                  name="message"
                  rows="6"
                  required
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-300"
                >
                  Envoyer
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
 

  );
}
