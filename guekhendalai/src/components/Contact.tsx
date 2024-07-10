const Contact = () => {
  return (
    <div
      className="w-full h-full bg-gray-200 flex
     flex-col md:flex-row gap-10"
    >
      <div className="flex flex-col basis-[20vw]   px-10 justify-center">
        <span>Phone</span>
        <span>email</span>
        <span>Address</span>
      </div>
      <div className="bg-white grow p-10">
        <iframe
          className="h-[450px] w-[500px] border-2 border-black"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d587.5293459964632!2d106.92663929902176!3d47.93257427785455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5d9693255bbd3afd%3A0xf3e8fbd680b7329d!2z0JDQnNCeINCi06nQsg!5e0!3m2!1sja!2sjp!4v1720235158567!5m2!1sja!2sjp"
          // width="600"
          // height="450"
          // style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
