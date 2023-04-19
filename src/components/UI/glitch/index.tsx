import { CSSProperties } from 'react';

export const Glitch = () => {
    const glitchBlocks = Array.from({ length: 5 }, (_, i) => ({
        id: i + 'glitch',
        height: Math.floor(Math.random() * 50) + 1 + 'px',
        delay: i * 0.1 + 's',
        glitchColor: 'rgba(209 213 219 / 0.15)',
    }));

    return (
        <>
            {glitchBlocks.map(block => (
                <div
                    key={block.id}
                    className=" glitch-effect bottom-0 z-0 text-gray-300"
                    style={
                        {
                            '--glitch_height': block.height,
                            '--glitch_color': block.glitchColor,
                            '--anim-delay': block.delay,
                        } as CSSProperties
                    }
                ></div>
            ))}
        </>
    );
};
