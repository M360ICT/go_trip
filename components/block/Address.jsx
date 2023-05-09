const Address = () => {
  const addressContent = [
    {
      id: 1,
      colClass: "col-lg-3",
      title: "Address",
      content: (
        <>House# 74 Road# 7, Block# H, Banani, Dhaka-1213</>
      ),
    },
    {
      id: 2,
      colClass: "col-auto",
      title: "Toll Free Customer Care",
      content: (
        <>
          <a href="tel:+4733378901">+8809638336699</a>
        </>
      ),
    },
    {
      id: 3,
      colClass: "col-auto",
      title: "Need live support?",
      content: (
        <>
          {" "}
          <a href="mailto:i@gotrip.com">info@m360ict.com</a>
        </>
      ),
    },
  ];
  return (
    <>
      {addressContent.map((item) => (
        <div className={`${item.colClass}`} key={item.id}>
          <div className="text-14 text-light-1">{item.title}</div>
          <div className="text-18 fw-500 mt-10">{item.content}</div>
        </div>
      ))}
    </>
  );
};

export default Address;
