

export default function Feature() {
  return (
    <div className="feature1__container">
      <div className="feature1__wrapper">
        <div className="feature1__header">
          <Html as="p" className="feature1__caption" color="#2563eb">
            Turn your idea into a reality
          </Html>
          <H2 className="feature1__title" color="#111827">
            Pitch an idea and convince the audience
          </H2>
          <Html as="p" className="feature1__subtitle" color="#4b5563">
            Convince the audience that your idea is worth their attention and investment, and
            encourage them to take the desired action.
          </Html>
        </div>

        <div className="feature1__list">
          <List className="feature1__list-wrapper">
            <Group className="feature1__list-item">
              <Icon
                type="emoji"
                className="feature1__item-icon"
                text="📦"
                color="#111827"
                background="#f3f4f6"
              />
              <H3 className="feature1__item-title" color="#111827">
                Custom branding
              </H3>
              <Html className="feature1__item-subtitle" color="#4b5563">
                Add your own logo, colors, and other branding elements to reflect your own brand.
              </Html>
            </Group>

            <Group className="feature1__list-item">
              <Icon
                type="emoji"
                className="feature1__item-icon"
                text="🧲"
                color="#111827"
                background="#f3f4f6"
              />
              <H3 className="feature1__item-title" color="#111827">
                Social proof
              </H3>
              <Html className="feature1__item-subtitle" color="#4b5563">
                Show testimonials and ratings to build trust and{" "}
                <strong>credibility with potential customers</strong>.
              </Html>
            </Group>

            <Group className="feature1__list-item">
              <Icon
                type="emoji"
                className="feature1__item-icon"
                text="🌁"
                color="#111827"
                background="yellow"
              />
              <H3 className="feature1__item-title" color="blue">
                Image Carousel
              </H3>
              <Html className="feature1__item-subtitle" color="red">
                Showcase your product, service, or other visual content in an engaging way to your
                customers that your offering is worth investing in.
              </Html>
            </Group>

            <Group className="feature1__list-item">
              <Icon
                type="emoji"
                className="feature1__item-icon"
                text="⛺"
                color="#111827"
                background="#f3f4f6"
              />
              <H3 className="feature1__item-title" color="#111827">
                Features walkthrough
              </H3>
              <Html className="feature1__item-subtitle" color="#4b5563">
                Highlight the key benefits and features of your product, and explain how it solves
                specific problems that your target customers have.
              </Html>
            </Group>

            <Group className="feature1__list-item">
              <Icon
                type="emoji"
                className="feature1__item-icon"
                text="✨"
                color="#111827"
                background="#f3f4f6"
              />
              <H3 className="feature1__item-title" color="#111827">
                Custom Open Graph
              </H3>
              <Html className="feature1__item-subtitle" color="#4b5563">
                Get your content stand out and attract more attention on social media with custom
                title, description, image, and other information.
              </Html>
            </Group>

            <Group className="feature1__list-item">
              <Icon
                type="emoji"
                className="feature1__item-icon"
                text="🥅"
                color="#111827"
                background="#f3f4f6"
              />
              <H3 className="feature1__item-title" color="#111827">
                Custom domain
              </H3>
              <Html className="feature1__item-subtitle" color="#4b5563">
                Use your own domain name to create a more professional-looking and cohesive
                experience for your customers.
              </Html>
            </Group>
          </List>
        </div>
      </div>
    </div>
  );
}
