import React from "react";
import { getAssetUrl } from "../utils/getAssetUrl";
import { useEffect, useRef } from "react";
import PageFiveChecklist from "./PageFiveChecklist";

const PageFive = ({ title, activeSubtab, onSubtabClick }) => {
  const subtabs = [
    {
      id: "intro",
      label: "Common Types of Wheelchairs",
      content: (
        <>
          <h2 className="text-gray-700 text-3xl font-Cap">
            Standard Wheelchairs
          </h2>
          <ul className="list-disc ml-12 space-y-2 text-gray-700 text-xl font-Rob">
            <li><b>Purpose:</b> Designed for short-term, multi-user applications in controlled environments such as hospitals and airports.</li>
            <li><b>Designed For:</b> Short-term conditions (e.g., post-operative recovery) lasting a few weeks to several months.</li>
            <li><b>Limitations:</b> Heavy, inefficient for self-propulsion due to non-adjustable wheels, and limited sizing options. Not intended for individual customisation.</li>
          </ul>
          <h2 className="text-gray-700 text-3xl font-Cap">
            Lightweight Wheelchairs
          </h2>
          <ul className="list-disc ml-12 space-y-2 text-gray-700 text-xl font-Rob">
            <li><b>Purpose:</b> Provides basic, intermittent mobility at a lower cost.</li>
            <li><b>Designed For:</b> Users who need assistance for short periods (∼20% of the day) or on uneven terrain, but who are primarily ambulatory.</li>
            <li><b>Limitations:</b> Fixed axle position makes self-propulsion inefficient, precluding its use as a primary mobility device.</li>
          </ul>

          <h2 className="text-gray-700 text-3xl font-Cap">
            High-Strength Lightweight Wheelchairs
          </h2>
          <ul className="list-disc ml-12 space-y-2 text-gray-700 text-xl font-Rob">
            <li><b>Purpose:</b> Offers a balance of durability and limited adjustability for regular, part-time use.</li>
            <li><b>Designed For:</b> Users who require a wheelchair for a significant portion (20-70%) of their daily mobility.</li>
            <li><b>Limitations:</b> Limited axle adjustability may not meet the biomechanical needs of full-time users, making it unsuitable as a primary chair.</li>
          </ul>

          <h2 className="text-gray-700 text-3xl font-Cap">
            Ultralightweight Wheelchairs
          </h2>
          <ul className="list-disc ml-12 space-y-2 text-gray-700 text-xl font-Rob">
            <li><b>Purpose:</b> The standard for full-time, long-term use, designed to maximise efficiency and minimize injury risk.</li>
            <li><b>Designed For:</b> Users who rely on a wheelchair as their primary means of mobility (80-100% of the time).</li>
            <li><b>Features:</b> Highly adjustable rear axle and frame components allow for precise configuration to the user's body and functional needs.</li>
          </ul>

          <h2 className="text-gray-700 text-3xl font-Cap">
            Hemi-Height Wheelchairs
          </h2>
          <ul className="list-disc ml-12 space-y-2 text-gray-700 text-xl font-Rob">
            <li><b>Purpose:</b> Features a lower seat-to-floor height to facilitate foot propulsion.</li>
            <li><b>Designed For:</b> Users of short stature or those who use their feet for mobility and stability (e.g., individuals with hemiplegia or balance deficits).</li>
            <li><b>Limitations:</b> Often heavy and typically lacks the sophisticated adjustability of an ultralightweight chair.</li>
          </ul>

          <h2 className="text-gray-700 text-3xl font-Cap">
            Manual Tilt-in-Space Wheelchairs
          </h2>
          <ul className="list-disc ml-12 space-y-2 text-gray-700 text-xl font-Rob">
            <li><b>Purpose:</b> Allows the seat and back angle to tilt together, maintaining postural alignment.</li>
            <li><b>Designed For:</b> Users requiring pressure redistribution, improved postural control, and assisted positioning for functions like respiration and swallowing.</li>
            <li><b>Features:</b> Highly configurable with options for supports and brakes to assist caregivers.</li>
          </ul>
          <h2 className="text-gray-700 text-3xl font-Cap">
            Paediatric Wheelchairs
          </h2>
          <ul className="list-disc ml-12 space-y-2 text-gray-700 text-xl font-Rob">
            <li><b>Purpose:</b> Scaled for smaller users with built-in adjustability to accommodate growth.</li>
            <li><b>Designed For:</b> Children who need a wheelchair for mobility augmentation or as their primary device.</li>
            <li><b>Considerations:</b> Ongoing configuration is essential to protect developing joints, maximise energy efficiency, and adjust for growth, necessitating regular clinical follow-up.</li>
          </ul>

          <h2 className="text-gray-700 text-5xl font-Cap mt-10">
            Sport-Specific Wheelchairs
          </h2>
          <h2 className="text-gray-700 text-3xl font-Cap">
            Tennis Wheelchairs
          </h2>
          <p className="text-gray-700 text-xl font-Rob">
            Optimised for speed and rapid directional changes to cover the entire court.
          </p>
          <ul className="list-disc ml-12 space-y-2 text-gray-700 text-xl font-Rob">
            <li>
              <b>Frame & Wheels:</b> Three-wheel design (two large rear, one small front caster) for lightness and fast acceleration.
            </li>
            <li>
              <b>Wheel Configuration:</b> Significant camber is applied to enhance lateral stability during reaches and improve turning speed.
            </li>
            <li>
              <b>Seating System:</b> Features a steep seat angle (pitch) to keep the player securely positioned, improving balance and control.
            </li>
            <li>
              <b>Athlete Positioning:</b> The knees are abducted and feet are placed on a rigid footrest behind the knees. This "closed" posture lowers the combined inertia of the player and chair, mimicking a figure skater's spin, for vastly improved maneuverability.
            </li>
            <li>
              <b>Special Features:</b> Handles are integrated into the front of the seat to aid balance during lateral reaches and to help maintain knee position.
            </li>
          </ul>
          <h2 className="text-gray-700 text-3xl font-Cap">
            Basketball Wheelchairs
          </h2>
          <p className="text-gray-700 text-xl font-Rob">
            Engineered for explosive acceleration, braking, and durability to withstand incidental contact.
          </p>
          <ul className="list-disc ml-12 space-y-2 text-gray-700 text-xl font-Rob">
            <li>
              <b>Frame & Wheels:</b> Standard four-wheel design. Uses high-pressure, smooth-tread tires for maximum speed on the court.
            </li>
            <li>
              <b>Wheel Configuration:</b> Camber is critical for quick turning and to protect players' hands during side impacts by creating a gap between the wheels at the top.
            </li>
            <li>
              <b>Protective Features:</b> Spoke guards are mandatory to prevent wheel damage and facilitate picking up the ball. Anti-tip rollers or skids are required on the front to prevent forward falls.
            </li>
            <li>
              <b>Seating & Positioning:</b> Rules limit seat height, leading to a near-level seat angle. However, guards often use a lower seat and steeper angle for enhanced speed and maneuverability. Strategic strapping systems are commonly used to optimize a player's positioning and functional performance.
            </li>
          </ul>
        </>
      )
    },
    {
      id: "fit",
      label: "Wheelchair Frame",
      content: (
        <>
          <p className="text-gray-700 text-xl font-Rob">
            The design of the wheelchair frame and its components directly impacts the user's experience. This section outlines common styles and variations, explaining how they influence propulsion efficiency, functional needs, and overall mobility.
          </p>
          <h2 className="text-gray-700 text-4xl font-Cap">
            Frame Design
          </h2>
          <p className="text-gray-700 text-xl font-Rob">
            Wheelchairs are commonly made from lightweight tubing which may be welded or bolted together using lugs (fittings made to match pieces of a joint). The selection of a rigid or folding frame often heavily depends on the user's transportation needs.
          </p>
          <p className="text-gray-700 text-xl font-Rob">
            There are two basic frame types:
          </p>
          <div className="ml-12 space-y-2 text-gray-700 text-xl font-Rob">
            <p><b>&gt; Folding</b></p>
            <p><b>&gt; Rigid</b></p>
          </div>
        <div className=" text-gray-700 text-xl font-Rob space-y-6">
          <span className="font-bold">Folding frames</span>
          <ul className="list-disc ml-12 space-y-2 mt-2">
            <li>Have a cross brace (X-shaped) underneath the seat frame.</li>
            <li>This <b>enables the wheelchair to collapse</b> in half for storage or transport purposes.</li>
          </ul>

          <span className="font-bold">Rigid frames</span>
          <ul className="list-disc ml-12 space-y-2 mt-2">
            <li>Have solid horizontal tubing underneath the seat frame and at the back support and foot support.</li>
            <li>Are a single solid structure that does not fold side-to-side, but <b>can be disassembled.</b> </li>
          </ul>
        </div>
        <img
          src={getAssetUrl("/pg5_1.png")}
          alt="Wheelbarrow diagram"
          className="w-230 h-auto rounded-lg shadow mx-auto mb-10"
        />
        <table className="table-auto border-collapse border border-gray-300 text-xl font-Rob w-full">
          <thead className="bg-gray-100 text-center">
            <tr>
              <th className="border border-gray-300 px-4 py-2"></th>
              <th className="border border-gray-300 px-4 py-2 text-left text-green-600">Advantages</th>
              <th className="border border-gray-300 px-4 py-2 text-left text-red-500">Disadvantages</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 px-4 py-2 font-bold">Non-rigid Frame Wheelchairs</td>
              <td className="border border-gray-300 px-4 py-2 align-top">
                <ul className="list-disc ml-6 space-y-2">
                  <li><b>Folding mechanism:</b> Common and more intuitive than disassembly</li>
                  <li><b>Shock absorption:</b> Better shock absorption over uneven surfaces</li>
                  <li><b>Removable foot supports:</b> Helps facilitate standing transfers</li>
                </ul>
              </td>
              <td className="border border-gray-300 px-4 py-2 align-top">
                <ul className="list-disc ml-6 space-y-2">
                  <li><b>Weight:</b> Heavier, due to folding mechanism components</li>
                  <li><b>Propulsion efficiency:</b> Reduced, as energy is dissipated through the flexed cross-brace frame</li>
                  <li><b>Durability:</b> Lower, due to moving and removable parts</li>
                  <li><b>Maneuverability:</b> Decreased, as swing-away or removable foot supports have greater overall length</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2 font-bold">Rigid Frame Wheelchairs</td>
              <td className="border border-gray-300 px-4 py-2 align-top">
                <ul className="list-disc ml-6 space-y-2">
                  <li><b>Weight:</b> Lighter with fewer moving parts</li>
                  <li><b>Propulsion efficiency:</b> Increased, due to weight and decreased flex in the frame</li>
                  <li><b>Durability:</b> Higher, due to structural rigidity and fewer moving parts</li>
                  <li><b>Maneuverability:</b> Slightly increased, due to foot support design and shorter overall length</li>
                </ul>
              </td>
              <td className="border border-gray-300 px-4 py-2 align-top">
                <ul className="list-disc ml-6 space-y-2">
                  <li><b>Disassembly:</b> Less intuitive than a folding mechanism</li>
                  <li><b>Shock absorption:</b> Decreased due to frame rigidity</li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
        <p className="text-gray-700 text-xl font-Rob font-bold">
          Key Considerations:
        </p>
        <ol className="list-decimal ml-12 space-y-3 text-gray-700 text-xl font-Rob">
          <li>
            <span className="font-bold">Frame Type:</span> Does the user need a rigid frame or a folding frame? How much weight and what size can they lift and manoeuvre?
          </li>
          <li>
            <span className="font-bold">Folding Style:</span> If a folding frame is needed, which style is best, i.e., one that folds from the sides or one where the back folds down onto the seat?
          </li>
          <li>
            <span className="font-bold">User Independence:</span> If disassembly is required, can the user perform it independently? Are tools needed, and can the process be modified for their independence?
          </li>
        </ol>
        <span className="text-gray-700 text-xl font-Rob font-bold">
          A Different Front End
        </span>
        <p className="text-gray-700 text-xl font-Rob mt-2">
          Most rigid wheelchairs are configured with a rigid foot support as part of the frame, and most folding wheelchairs have a swing-away foot support. Though, depending on the client’s specific needs, a rigid wheelchair with a swing-away foot support and folding wheelchairs with a rigid front end may be available. 
        </p>
        <h2 className="text-gray-700 text-4xl font-Cap">
          Frame Geometric Styles
        </h2>
        <p className="text-gray-700 text-xl font-Rob mt-2">
          The structural configuration or geometry of the wheelchair’s frame affects its strength, rigidity, weight, and how it responds during propulsion. Frame geometry can be used to reduce the effects of the impulse observed when going off a curb, or to minimise road vibration. 
        </p>
        <p className="text-gray-700 text-xl font-Rob mt-2">
          Three common frame styles include the:
        </p>
        <div className="ml-12 space-y-2 text-gray-700 text-xl font-Rob">
          <p><b>&gt; Box frame</b></p>
          <p><b>&gt; Dual tube frame</b></p>
          <p><b>&gt; Cantilever frame</b></p>
        </div>
        <div className="text-gray-700 text-xl font-Rob space-y-4">
          <span className="font-bold">Box frames</span>
            <ul className="list-disc ml-12 space-y-2 mt-2">
              <li>Commonly found in rigid-frame wheelchairs, where they form the main structural rectangle.</li>
              <li>The design is characterised by frame members arranged in a rectangular, box-like shape.</li>
              <li>This geometry provides excellent vertical rigidity and torsional strength, resulting in a highly durable and stable frame.</li>
              <li>Due to this inherent stiffness, the frame itself is not the most effective for vibration dispersion, resulting in the transfer of ‘road noise’ to the user.</li>
              <li>In this design, suspension and shock absorption are the responsibility of other components, such as the tires and cushion. The frame's primary role is to provide a solid, rigid foundation.</li>
            </ul>
        </div>
        <img
          src={getAssetUrl("placeholder.png")}
          alt="Wheelbarrow diagram"
          className="w-175 h-auto rounded-lg shadow mx-auto"
        />
        <div className=" text-gray-700 text-xl font-Rob">
          <span className="font-bold">Dual tube frames</span>
          <ul className="list-disc ml-12 space-y-2 mt-2">
            <li>Feature a second, (often triangulated) frame tube, which creates a structure that balances rigidity for propulsion efficiency with controlled flex for shock absorption.</li>
            <li>This flexibility allows the frame to absorb more vibration and road noise than a rigid box frame.</li>
            <li>The triangulated design is often perceived as more modern and aesthetically streamlined.</li>
            <li>The compact, often tapered shape of the frame can improve transportability by reducing the overall folded width of the wheelchair.</li>
          </ul>
        </div>
        <img
          src={getAssetUrl("placeholder.png")}
          alt="Wheelbarrow diagram"
          className="w-175 h-auto rounded-lg shadow mx-auto"
        />
        <div className=" text-gray-700 text-xl font-Rob">
          <span className="font-bold">Cantilever frames</span>
          <ul className="list-disc ml-12 space-y-2 mt-2">
            <li>Are exclusive to rigid wheelchairs, where the front and rear sections are connected by a single main tube, resembling a cantilever beam anchored at the rear wheels.</li>
            <li>They are among the most compact for transport and the lightest type of rigid frame available.</li>
            <li>
              <span className="">Design principles include:</span>
              <ol className="list-decimal ml-8 space-y-2 mt-4">
                <li><b>Built-in suspension:</b> The frame's controlled flex absorbs vibration and shock, providing a smoother ride than a fully rigid frame.</li>
                <li><b>Structural efficiency:</b> The use of fewer tubes positioned closer to the user makes the chair lightweight and reduces its visual bulk.</li>
                <li><b>Simplified construction:</b> Minimal parts and welds lower manufacturing complexity and reduce potential structural weaknesses.</li>
              </ol>
            </li>
          </ul>
        </div>
        <img
          src={getAssetUrl("placeholder.png")}
          alt="Wheelbarrow diagram"
          className="w-175 h-auto rounded-lg shadow mx-auto"
        />
        <h2 className="text-gray-700 text-4xl font-Cap">
          Folding mechanisms
        </h2>
        <p className="text-gray-700 text-xl font-Rob mt-2">
          There are three commonly used folding mechanisms used with wheelchair frames:
        </p>
        <div className="ml-12 space-y-2 text-gray-700 text-xl font-Rob">
          <p><b>&gt; Cross-brace</b></p>
          <p><b>&gt; Parallel-brace</b></p>
          <p><b>&gt; Forward folding</b></p>
        </div>
        <p className="text-gray-700 text-xl font-Rob mt-2">
          Variations on the cross-brace design (single or double cross-brace mechanisms) are most commonly used in folding wheelchairs.
        </p>
        <span className="text-gray-700 text-xl font-Rob font-bold">
          Cross-brace Mechanism
        </span>
        <p className="text-gray-700 text-xl font-Rob mt-2 mb-8">
          Consists of two crossing frame members forming an “X” when viewed from behind, hinged at the bottom and pinned centrally. It folds by lifting the seat upholstery, which draws the cross-members upward and pulls the side frames together. The user’s weight stabilises the frame when opened, preventing accidental folding. Double cross-brace designs increase frame stiffness. This is a simple and reliable mechanism– albeit may be prone to collapse under lateral tilt and increases the folded height. Some designs incorporate over-centre locks or snap systems to enhance stability.
        </p>
        <span className="text-gray-700 text-xl font-Rob font-bold">
          Parallel-brace Mechanism
        </span>
        <p className="text-gray-700 text-xl font-Rob mt-2 mb-8">
          The frame folds laterally via cross-members hinged at both ends and at the centre. In the open position, the centre hinge locks; folding occurs when the lock is released and the user pulls the frame forward. Cross-members can be secured with pin or cam locks. This design provides rigid-like performance when extended and can be partially folded with the user seated, aiding access through narrow spaces. The mechanism is more complex, requiring greater effort to operate and maintain.
        </p>
        <span className="text-gray-700 text-xl font-Rob font-bold">
          Forward-folding Mechanism
        </span>
        <p className="text-gray-700 text-xl font-Rob mt-2">
          Involves hinging both the front frame and backrest, allowing the backrest to fold onto the seat and the front section to fold beneath it. This achieves very compact storage, especially when combined with quick-release rear wheels. Common in ultralight wheelchairs, this design is often limited to forward-folding backrests. It offers significant portability advantages but requires multiple operations to fold and is less commonly used.
        </p>
        <h2 className="text-gray-700 text-4xl font-Cap">
          Materials Used in Wheelchair Frames
        </h2>
        <p className="text-gray-700 text-xl font-Rob mt-2">
          Modern wheelchairs are commonly constructed from aluminium, steel, titanium, or advanced composite materials such as carbon fibre and Kevlar. Each material offers distinct advantages in terms of strength, weight, durability, and cost.
        </p>
        <img
          src={getAssetUrl("/pg5_2.png")}
          alt="Wheelbarrow diagram"
          className="w-230 h-auto rounded-lg shadow mx-auto"
        />
        <div className=" text-gray-700 text-xl font-Rob">
          <span className="font-bold">Aluminium</span>
          <ul className="list-disc ml-12 space-y-2 mt-2">
            <li>Most aluminium frames use round drawn 6061 aluminium tubing.</li>
            <li>Among the least expensive and most versatile heat-treatable alloys.</li>
            <li>Offers good mechanical properties and high corrosion resistance.</li>
            <li>
              <span className="">Widely used due to its:</span>
              <ul className="list-disc ml-8 space-y-2 mt-2">
                <li>Availability and visual appeal</li>
                <li>Low weight and adequate strength</li>
                <li>Resistance to environmental corrosion</li>
              </ul>
            </li>
          </ul>
        </div>
        <div className=" text-gray-700 text-xl font-Rob">
          <span className="font-bold">Steel</span>
          <ul className="list-disc ml-12 space-y-2 mt-2">
            <li>Typically made from chromium–molybdenum (chro-moly) alloy steel (e.g., 4130 or 4140) or mild steel (e.g., 1010 or 1020).</li>
            <li>
              Chro-moly steel is valued for:
              <ul className="list-disc ml-8 space-y-2 mt-2">
                <li>Excellent weldability and ease of fabrication</li>
                <li>Moderate hardenability with high fatigue resistance</li>
                <li>Option for nitriding treatment to increase wear and abrasion resistance</li>
              </ul>
            </li>
            <li>Provides high durability but adds significant weight compared with aluminium or titanium</li>
          </ul>
        </div>
        <div className=" text-gray-700 text-xl font-Rob">
          <span className="font-bold">Titanium</span>
          <ul className="list-disc ml-12 space-y-2 mt-2">
            <li>A lightweight, strong, non-ferrous metal known for exceptional corrosion resistance and long-term durability.</li>
            <li>
              Used for its:
              <ul className="list-disc ml-8 space-y-2 mt-2">
                <li>High strength-to-weight ratio</li>
                <li>Attractive finish and resistance to wear</li>
              </ul>
            </li>
            <li>
              Limitations:
              <ul className="list-disc ml-8 space-y-2 mt-2">
                <li>High cost and specialised fabrication requirements (requires skilled welders and precision tools).</li>
                <li>Brittle fracture risk if flawed or worn — failure can occur suddenly.</li>
              </ul>
            </li>
          </ul>
        </div>
        <div className=" text-gray-700 text-xl font-Rob">
          <span className="font-bold">Carbon Fibre and Kevlar Composites</span>
          <ul className="list-disc ml-12 space-y-2 mt-2">
            <li>
              Carbon fibre:
              <ul className="list-disc ml-8 space-y-2 mt-2">
                <li>Extremely stiff and offers high tensile strength.</li>
                <li>Very low density, offers superior weight reduction without compromising rigidity.</li>
                <li>Demonstrates the lowest vibration transmission (Chenier & Aissaoui, 2014; Lariviere et al., 2021).</li>
              </ul>
            </li>
            <li>
              Kevlar:
              <ul className="list-disc ml-8 space-y-2 mt-2">
                <li>A light, organic, yellow fibre soft to the touch and highly impact-resistant.</li>
                <li>Provides excellent toughness, though poor compression strength.</li>
              </ul>
            </li>
            <li>Composite frames combine these materials to achieve lightweight yet robust structures, ideal for high-performance and sports wheelchairs.</li>
          </ul>
        </div>
        </>
      )
    },
    {
      id: "measure",
      label: "Rear Wheels",
      content: (
        <>
          <h2 className="text-gray-700 text-4xl font-Cap">
            Tires
          </h2>
          <p className="text-gray-700 text-xl font-Rob">
            The performance of a manual wheelchair is greatly influenced by the choice of rear tire. These can be categorised into three primary types: pneumatic, solid, and hybrid airless inserts. Each present distinct trade-offs in comfort, efficiency, durability, reliability and maintenance.
          </p>
          <span className="text-gray-700 text-xl font-Rob font-bold">
            1. Pneumatic (Air-Filled)
          </span>
          <p className="text-gray-700 text-xl font-Rob mt-2">
            Pneumatic tires offer a more cushioned ride and are better at navigating obstacles with good traction on most terrain. They are generally the lightest and provide the best propulsion efficiency, along with superior shock absorption and vibration dampening for pain control, spasm management, and comfort. 
          </p>
          <p className="text-gray-700 text-xl font-Rob">
            Their main drawbacks include regular maintenance, susceptibility to punctures, and more frequent replacement than solid tires due to a thinner outer tread layer. A deeper tread increases durability and off-road traction but also raises rolling resistance, requiring greater propulsion force. A thin profile decreases friction during turning, making the chair more agile and ideal for sports, though some users report decreased hand comfort.
          </p>
          <span className="text-gray-700 text-xl font-Rob font-bold">
            2. Solid (Urethane)
          </span>
          <p className="text-gray-700 text-xl font-Rob mt-2">
            Solid tires offer the reliability of being puncture-proof and require little to no maintenance. They have higher tensile strength and load capacity. The significant trade-off is markedly decreased vibration and shock absorption, and reduced traction, giving a bumpier ride. They are typically heavier due to increased rubber mass and have increased rolling resistance. Hence, they perform best on smooth, even, and indoor surfaces.
          </p>
          <span className="text-gray-700 text-xl font-Rob font-bold">
            3. Hybrid Tires (Pneumatic Casing with Airless Insert)
          </span>
          <p className="text-gray-700 text-xl font-Rob mt-2">
           This category uses a pneumatic-style casing filled with a solid insert—such as foam or rubber—to eliminate flats while providing more cushioning than a solid tire (though less than a true pneumatic). They are the heaviest option and exhibit the greatest rolling resistance, impacting propulsion efficiency. Foam-filled inserts generally provide a smoother ride and better rollability than rubber inserts that cause a faster loss of momentum.
          </p>
          <h2 className="text-gray-700 text-4xl font-Cap mt-10">
            Rear Wheel Styles
          </h2>
          <p className="text-gray-700 text-xl font-Rob mt-2">
            The two most common rear wheel styles are spoked and mag (moulded composite) wheels, each with distinct performance characteristics.
          </p>
          <span className="text-gray-700 text-xl font-Rob font-bold">
            Spoked Wheels
          </span>
          <p className="text-gray-700 text-xl font-Rob mt-2">
            Spoked wheels consist of a rim, a central hub, and tensioned spokes connecting them. They are substantially lighter and more responsive than mag wheels, making them the preferred choice for sports and active users seeking maximum propulsion efficiency.
          </p>
          <ul className="list-disc ml-12 space-y-4 mt-2 text-gray-700 text-xl font-Rob">
            <li>
              <b>Rims:</b> Available in single, double, or triple-wall constructions, referring to the number of material layers, which directly impacts strength. Materials range from standard steel and aluminum to high-performance titanium, magnesium, or carbon fibre for an optimal stiffness-to-weight ratio.
            </li>
            <li>
              <b>Spokes:</b> Materials include steel, aluminum, carbon fibre, and titanium, affecting weight and durability.
              <ul className="list-disc ml-12 space-y-2 mt-2">
                <li><b>J-bend:</b> Traditional but less durable due to a stress point at the bend.</li>
                <li><b>Straight-pull:</b> Allows for higher, more uniform tension, increasing strength and durability.</li>
              </ul>
            </li>
            <li>
              <b>Spoke Count:</b> A higher number of spokes distributes the load more evenly, increasing wheel strength and stiffness at the cost of added weight. Proper, even spoke tension is critical for a wheel that rolls straight and efficiently.
            </li>
          </ul>
          <span className="text-gray-700 text-xl font-Rob font-bold">
            Mag (Moulded Composite) Wheels
          </span>
          <p className="text-gray-700 text-xl font-Rob mt-2">
            Mag wheels are single-piece units moulded from composite materials like fibre-reinforced ABS or PVC plastic. They prioritize durability and low maintenance over performance.
          </p>
          <ul className="list-disc ml-12 space-y-2 mt-2 text-gray-700 text-xl font-Rob">
            <li>
              <b>Performance:</b> They are heavier (adding ~1 kg per pair) and less efficient than spoked wheels due to their weight and structural flex, which absorbs some energy during propulsion.
            </li>
            <li>
              <b>Durability & Cost:</b> They are more impact-resistant, require virtually no maintenance, and are generally less expensive than equivalent spoked wheel systems.
            </li>
          </ul>
          <h2 className="text-gray-700 text-4xl font-Cap mt-10">
            Handrims
          </h2>
          <p className="text-gray-700 text-xl font-Rob">
           Handrims are the metal rings attached to the rear wheels, which the user grips to propel and steer the wheelchair. They are typically fabricated from circular aluminium tubing and have a slightly smaller diameter than the wheel.
          </p>
          <p className="text-gray-700 text-xl font-Rob">
            Standard single-tube rims are usually the lightest options, but are not ergonomic as they force a tight grip that can lead to upper limb strain and fatigue. Selecting the appropriate handrim, based on its material, coating, and ergonomic design, can enhance propulsion efficiency, user comfort, and the long-term preservation of upper limb function.
          </p>
        </>
      )
    },
    {
      id: "5",
      label: "Castors",
      content: (
        <>
          <p className="text-gray-700 text-xl font-Rob">
            Castor choice directly influences front seat-to-floor height, frame angle, lower extremity positioning, ride characteristics, and propulsion efficiency. Selection is based on the user's lifestyle, capabilities, preferences, and environment, considering factors such as indoor maneuverability, outdoor use, and wheelchair skills.
          </p>
          <span className="text-gray-700 text-xl font-Rob font-bold">
            Examples:
          </span>
          <ul className="list-disc ml-12 space-y-2 mt-4 text-gray-700 text-xl font-Rob">
            <li>
              <b>Environment:</b> Larger/wider castors may be prioritised for outdoor/rough terrain, and smaller/narrower castors for tight indoor spaces.
            </li>
            <li>
              <b>Rolling Resistance:</b> A wider, smaller-diameter castor may deliver similar propulsion performance to a narrower, larger-diameter castor on mixed surfaces.
            </li>
            <li>
              <b>Weight & Stability:</b> Heavier castors are more prone to flutter at high speeds.
            </li>
          </ul>
          <h2 className="text-gray-700 text-4xl font-Cap mt-10">
            Castor Size
          </h2>
          <div className=" text-gray-700 text-xl font-Rob space-y-6 mt-5">
            <div>
              <span className="font-bold">Diameter</span>
              <ul className="list-disc ml-12 space-y-2 mt-2">
                <li>
                  <b>Larger Diameter:</b>
                  <ul className="list-disc ml-8 space-y-2 mt-2">
                    <li>Allows for a higher front seat to floor height and a greater front frame angle.</li>
                    <li>Clear obstacles more easily and maintain propulsion speed due to decreased rolling resistance.</li>
                  </ul>
                </li>
                <li>
                  <b>Smaller Diameter:</b>
                  <ul className="list-disc ml-8 space-y-2 mt-2">
                    <li>Permits a lower front seat to floor height and a smaller front frame angle.</li>
                    <li>Offers greater manoeuverability and versatility due to smaller turning radius and castor footprint.</li>
                  </ul>
                </li>
              </ul>
            </div>

            <div>
              <span className="font-bold">Width</span>
              <ul className="list-disc ml-12 space-y-2 mt-2">
                <li>
                  <b>Wider</b>
                  <ul className="list-disc ml-8 space-y-2 mt-2">
                    <li>Increases rolling resistance due to greater surface contact.</li>
                    <li>Rolls easier over rough/uneven terrain and is less prone to getting caught in cracks.</li>
                  </ul>
                </li>
                <li>
                  <b>Narrower</b>
                  <ul className="list-disc ml-8 space-y-2 mt-2">
                    <li>Decreases rolling resistance due to lesser surface contact.</li>
                    <li>More efficient on smooth, hard surfaces.</li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
          <h2 className="text-gray-700 text-4xl font-Cap mt-10">
            Castor Tire Types
          </h2>
          <span className="text-gray-700 text-xl font-Rob font-bold">
            Solid (Polyurethane/Rubber)
          </span>
          <ul className="list-disc ml-12 space-y-2 mt-4 text-gray-700 text-xl font-Rob">
            <li>
              <b>Standard:</b> Made of hard polyurethane or rubber. Durable with moderate rolling resistance.
            </li>
            <li>
              <b>Soft-Roll:</b> Uses a softer polyurethane compound and a convex shape. Reduces rolling resistance on hard surfaces and increases compliance on softer terrain. However, the softer material causes faster wear compared to standard solid castors.
            </li>
          </ul>
          <span className="text-gray-700 text-xl font-Rob font-bold">
            Pneumatic (Air-Filled)
          </span>
          <p className="text-gray-700 text-xl font-Rob">
            Provides improved comfort and a smoother ride over irregular surfaces by absorbing shock. Their main drawbacks are lower durability, susceptibility to punctures, and the requirement for regular air pressure maintenance to preserve propulsion efficiency, making them less common.
          </p>
          <h2 className="text-gray-700 text-4xl font-Cap mt-10">
            Castor Hub Material
          </h2>
          <ul className="list-disc ml-12 space-y-2 mt-2 text-gray-700 text-xl font-Rob">
            <li>
              <b>Composite/Plastic:</b> Lighter weight, reducing overall chair mass.
            </li>
            <li>
              <b>Aluminium/Metal Alloy:</b> Offers superior durability and strength, better withstanding impacts and heavy use.
            </li>
          </ul>





        </>
      )
    },
    {
      id: "6",
      label: "Armrests",
      content: (
        <>
          <p className="text-gray-700 text-xl font-Pixelmono">
            Additional studies and references can be found in medical journals and historical archives.
          </p>
          <div className="h-64 bg-gray-200 rounded"></div>
        </>
      )
    },
    {
      id: "7",
      label: "Legrests",
      content: (
        <>
          <p className="text-gray-700 text-xl font-Pixelmono">
            Additional studies and references can be found in medical journals and historical archives.
          </p>
          <div className="h-64 bg-gray-200 rounded"></div>
        </>
      )
    },
    {
      id: "8",
      label: "Configuration",
      content: (
        <>
          <p className="text-gray-700 text-xl font-Pixelmono">
            Additional studies and references can be found in medical journals and historical archives.
          </p>
          <div className="h-64 bg-gray-200 rounded"></div>
        </>
      )
    },
    {
      id: "9",
      label: "Fitting Checklist: The Chair",
      content: (
        <>
          <PageFiveChecklist />
        </>
      )
    },
    {
      id: "10",
      label: "References",
      content: (
        <>
          <p className="text-gray-700 text-xl font-Pixelmono">
            Additional studies and references can be found in medical journals and historical archives.
          </p>
          <div className="h-64 bg-gray-200 rounded"></div>
        </>
      )
    }
  ];

  const currentIndex = subtabs.findIndex(tab => tab.id === activeSubtab);
  const currentSubtab = subtabs[currentIndex];
  const scrollRef = useRef(null);

  const handlePrev = () => {
    if (currentIndex > 0) {
      onSubtabClick(subtabs[currentIndex - 1].id, "page5");
    }
  };

  const handleNext = () => {
    if (currentIndex < subtabs.length - 1) {
     onSubtabClick(subtabs[currentIndex + 1].id, "page5");
    }
  };

      // Reset scroll when activeSubtab changes
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({ top: 0, behavior: "instant" });
    }
  }, [activeSubtab]);

  return (
    <div className="w-full h-full flex">
      {/* LEFT SIDEBAR */}
      <div className="w-72 bg-gray-100 border-r border-gray-300 p-6 flex-shrink-0 h-screen flex flex-col transition-opacity duration-300">
        <p className="text-4xl font-mono font-bold mb-6 text-gray-800 tracking-tight">{title}</p>
        <div className="flex flex-col gap-3">
          {subtabs.map(tab => (
            <div
              key={tab.id}
              onClick={() => onSubtabClick(tab.id, "page5")}
              className={`cursor-pointer px-3 py-2 rounded font-Pixelmono text-xl
                ${activeSubtab === tab.id ? "bg-black text-white" : "hover:bg-gray-300 text-black"}`}
            >
              {tab.label}
            </div>
          ))}
        </div>
      </div>

      {/* RIGHT CONTENT */}
      <div ref={scrollRef} className="flex-1 p-8 overflow-y-auto relative transition-opacity duration-300 bg-white">
        <h2 className="text-6xl font-bold mb-6 font-Cap text-gray-700">
          {currentSubtab?.label}
        </h2>

        <div className="space-y-6">
          {currentSubtab?.content}
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-8">
          <div
            onClick={handlePrev}
            className={`px-6 py-2 font-Pixelmono text-2xl font-bold rounded
                        ${currentIndex === 0 ? "bg-gray-400 text-gray-700 cursor-not-allowed" : "bg-black text-white hover:bg-gray-800 hover:cursor-pointer"}`}
          >
            &lt; Previous
          </div>

          <div
            onClick={handleNext}
            className={`px-6 py-2 font-Pixelmono text-2xl font-bold rounded
                        ${currentIndex === subtabs.length - 1 ? "bg-gray-400 text-gray-700 cursor-not-allowed" : "bg-black text-white hover:bg-gray-800 hover:cursor-pointer"}`}
          >
            Next &gt;
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageFive;
