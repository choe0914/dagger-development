class AttrDict(dict):
    def __init__(self, *args, **kwargs):
        super(AttrDict, self).__init__(*args, **kwargs)
        self.__dict__ = self

CARD_TYPES=AttrDict({
    "SUSPECT": 1,
    "WEAPON": 2,
    "ROOM": 3,
    "TOKEN": 4,
})

SUSPECTS= AttrDict({
    "MISS_SCARLET" : "Miss Scarlet",
    "COLONEL_MUSTARD" : "Colonel Mustard",
    "PROFESSOR_PLUM" : "Professor Plum",
    "MR_GREEN" : "Mr. Green", 
    "MRS_WHITE" : "Mrs. White", 
    "MRS_PEACOCK" : "Mrs. Peacock"
})

WEAPONS= AttrDict({
    "ROPE" : "Rope",
    "LEAD_PIPE" : "Lead Pipe",
    "KNIFE" : "Knife",
    "WRENCH" : "Wrench", 
    "CANDLESTICK" : "Candlestick", 
    "REVOLVER" : "Revolver"
})

ROOMS= AttrDict({
    "KITCHEN" : "Kitchen",
    "BALLROOM" : "Ballroom",
    "CONSERVATORY" : "Conservatory",
    "BILLIARD_ROOM" : "Billiard Room", 
    "LIBRARY" : "Library",
    "STUDY" : "Study",
    "HALL" : "Hall",
    "LOUNGE" : "Lounge",
    "DINING_ROOM" : "Dining Room",
})