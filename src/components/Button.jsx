

import React from "react";

const Button = (props) => {
  return (
    <button className="relative py-3 px-6 rounded-xl font-medium text-lg bg-gradient-to-b from-[#C8A951] to-[#A88F42] shadow-[0px_0px_14px_#C8A951]">
      {/* Decorative layers for shine and depth */}
      <div className="absolute inset-0">
        <div className="rounded-xl border border-white/20 absolute inset-0 [mask-image:linear-gradient(to_bottom, black, transparent)]"></div>
        <div className="rounded-xl border absolute inset-0 border-white/40 [mask-image:linear-gradient(to_top, black, transparent)]"></div>
        <div className="absolute inset-0 border-white/40 shadow-[0_0_12px_rgb(200,201,81,0.7)_inset] rounded-xl"></div>
      </div>
      <span>{props.children}</span>
    </button>
  );
};

export default Button;
