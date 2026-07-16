# Generates ../character.svg — pixel portrait, 32x43 grid.
# Edit ART below, then: python tools/gen_char.py
#
# Legend:
#   . transparent   H hair      h hair highlight   S skin      s skin shadow
#   F frame         G lens      B beard            T tee       t tee highlight
#   R saber blade   W saber hilt                   A arm skin  J jeans
#   j jeans shadow  O shoe

import os

ART = [
    "................................",  # 0
    "..........HHHHHHHHHHHH..........",  # 1
    "........HHHHhHHHHHHhHHHH........",  # 2
    ".......HHHHHHHHhHHHHHHHHH.......",  # 3
    "......HHhHHHHHHHHHHHHHhHHH......",  # 4
    "......HHHHHHHhHHHHHHHHHHHH......",  # 5
    ".....HHHHHHHHHHHHHHHhHHHHHH.....",  # 6
    ".....HHHhHHSSSSSSSSSSSSHHHHH....",  # 7
    ".....HHHHSSSSSSSSSSSSSSHHHH.....",  # 8
    ".....HHHFFFFFFFFFFFFFFFFHHH.....",  # 9  frame top
    ".....HHHFGGGGGGFFGGGGGGFHHH.....",  # 10 lenses
    ".....HHHFGGGGGGFFGGGGGGFHHH.....",  # 11 lenses
    ".....HHHFSSSSSSSSSSSSSSFHHH.....",  # 12
    "......HHSSSSSSSSSSSSSSSSHH......",  # 13
    "......HHSSSSBBBBBBBBSSSSHH......",  # 14 mustache
    "........BBBBBBmmmmBBBBBB........",  # 15 beard, mouth inside it
    ".........BBBBBBBBBBBBBB.........",  # 16
    "..........BBBBBBBBBBBB..........",  # 17
    ".............SSSSSS.............",  # 18 neck
    "........TTTTTTTTTTTTTTTT........",  # 19 shoulders
    ".....TTTTTTTTTTTTTTTTTTTTTT.....",  # 20 sleeves
    ".....TTTTTTTTTTRRTTTTTTTTTT.....",  # 21 saber blade
    ".....TTTTTTTTTTRRTTTTTTTTTT.....",  # 22
    ".....TTTTTTTTTTRRTTTTTTTTTT.....",  # 23
    ".....AAATTTTTTTRRTTTTTTTAAA.....",  # 24
    ".....AAATTTTTTWWWWTTTTTTAAA.....",  # 25 crossguard
    ".....AAATTTTTTTWWTTTTTTTAAA.....",  # 26 hilt
    ".....AAATTTTTTTWWTTTTTTTAAA.....",  # 27
    ".....AAATTTTTTTTTTTTTTTTAAA.....",  # 28
    "........TTTTTTTTTTTTTTTT........",  # 29
    "........JJJJJJJJJJJJJJJJ........",  # 30 jeans
    "........JJJJJJJjjJJJJJJJ........",  # 31
    "........JJJJJJJjjJJJJJJJ........",  # 32
    "........JJJJJJJ..JJJJJJJ........",  # 33 legs split
    "........JJJJJJJ..JJJJJJJ........",  # 34
    "........JJJJJJJ..JJJJJJJ........",  # 35
    "........JJJJJJJ..JJJJJJJ........",  # 36
    "........JJJJJJJ..JJJJJJJ........",  # 37
    "........JJJJJJJ..JJJJJJJ........",  # 38
    "........JJJJJJJ..JJJJJJJ........",  # 39
    "........JJJJJJJ..JJJJJJJ........",  # 40
    "........OOOOOOO..OOOOOOO........",  # 41 shoes
    "........OOOOOOO..OOOOOOO........",  # 42
]

# Pastel Dark Souls tones — muted, chalky, low saturation.
PALETTE = {
    'H': '#3a2c22',  # hair
    'h': '#55402f',  # hair curl highlight
    'S': '#d9a179',  # skin
    's': '#bd835c',  # skin shadow
    'F': '#2b2b33',  # glasses frame
    'G': '#4a4a57',  # lens
    'B': '#33251a',  # beard
    'm': '#7d4a45',  # mouth, set into the beard
    'T': '#2f2f36',  # black tee (soft, not pure black)
    't': '#3d3d45',
    'R': '#d08a8a',  # saber blade — pastel ember
    'W': '#b9b3a6',  # hilt
    'A': '#d9a179',  # arms
    'J': '#5b6e96',  # navy jeans, pastel
    'j': '#48587a',  # jeans shadow / seam
    'O': '#3a3a44',  # shoes
}


def build():
    h = len(ART)
    w = len(ART[0])
    for i, row in enumerate(ART):
        assert len(row) == w, f"row {i} is {len(row)} wide, expected {w}"

    rects = []
    for y, row in enumerate(ART):
        x = 0
        while x < w:
            c = row[x]
            if c == '.':
                x += 1
                continue
            # merge horizontal runs of the same colour into one rect
            run = 1
            while x + run < w and row[x + run] == c:
                run += 1
            rects.append(
                f'<rect x="{x}" y="{y}" width="{run}" height="1" fill="{PALETTE[c]}"/>'
            )
            x += run

    return (
        f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {w} {h}" '
        f'shape-rendering="crispEdges" role="img" '
        f'aria-label="Pixel portrait of Fikret Kutluay">\n'
        + '\n'.join(rects)
        + '\n</svg>\n'
    )


if __name__ == '__main__':
    repo = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    out = os.path.join(repo, 'character.svg')
    svg = build()
    with open(out, 'w', encoding='utf-8') as f:
        f.write(svg)
    print(f'wrote {out} ({len(svg)} bytes)')
