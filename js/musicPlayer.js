
const mediaPlayer = {
    songs: [],
    authors: [],
    currentSongIndex: 0,
    currentAuthorIndex: 0,
    isPlaying: false,
    duration: 0,

    getCurrentSong() {
        return this.songs[this.currentSongIndex];
    },

    getCurrentAuthor() {
        return this.authors[this.currentAuthorIndex];
    },

    add(song, author, duration) {
        this.songs.push(song);
        this.authors.push(author);
        this.duration += duration;
    },

    remove(index) {
        const song = this.songs[index];
        const author = this.authors[index];
        console.log(`(remove method) ${song} by ${author} has been removed from the playlist`);
        this.songs.splice(index, 1);
        this.authors.splice(index, 1);
    },

    play() {
        if (this.isPlaying === false) {
            this.isPlaying = true;
            const currentSong = this.getCurrentSong();
            const currentAuthor = this.getCurrentAuthor();
            console.log(`(play method) Playing ${currentSong} by ${currentAuthor}`);
        } else {
            console.log('(play method) Song already playing!');
        }
    },

    pause() {
        if (this.isPlaying === true) {
            this.isPlaying = false;
            const currentSong = this.getCurrentSong();
            console.log(`(pause method) Paused ${currentSong}`)
        } else {
            console.log('(pause method) Song now paused!');
        }
    },

    next() {
        if (this.currentSongIndex === this.songs.length - 1 && this.currentAuthorIndex === this.authors.length - 1) {
            this.currentSongIndex = 0;
            this.currentAuthorIndex = 0;
        } else {
            this.currentSongIndex++;
            this.currentAuthorIndex++;
        }
        const currentSong = this.getCurrentSong();
        const currentAuthor = this.getCurrentAuthor();
        console.log(`(next method) Playing: ${currentSong} by ${currentAuthor}`);
    },

    previous() {
        if (this.currentSongIndex === 0 && this.currentAuthorIndex === 0) {
            this.currentSongIndex = this.songs.length - 1;
            this.currentAuthorIndex = this.authors.length - 1;
        } else {
            this.currentSongIndex--;
            this.currentAuthorIndex--;
        }
        const currentSong = this.getCurrentSong();
        const currentAuthor = this.getCurrentAuthor();
        console.log(`(previous method) Playing: ${currentSong} by ${currentAuthor}`);
    },

    displayCurrentSong() {
        const currentSong = this.getCurrentSong();
        const currentAuthor = this.getCurrentAuthor();
        console.log(`(displayCurrentSong method) Now playing: ${currentSong} by ${currentAuthor}`);
    },

    calculateDuration() {
        console.log(`(calculateDuration method) The total duration of the playlist is ${this.duration} seconds`);
    },

    displayAll() {
        return this.songs;
    }
}

mediaPlayer.add('Bohemian Rhapsody', 'Queen', 355);
mediaPlayer.add('Stairway to Heaven', 'Led Zeppelin', 482);
mediaPlayer.add('Hotel California', 'The Eagles', 390);

// console.log(mediaPlayer.displayAll());

mediaPlayer.calculateDuration(); // The total duration of the playlist is 1227 seconds.

mediaPlayer.play(); // Playing Bohemian Rhapsody by Queen.

mediaPlayer.next(); // Playing Stairway to Heaven by Led Zeppelin.

mediaPlayer.displayCurrentSong(); // Now playing: Stairway to Heaven by Led Zeppelin.

mediaPlayer.pause(); // Paused Stairway to Heaven.

mediaPlayer.previous(); // Playing Bohemian Rhapsody by Queen.

mediaPlayer.remove(1); // Stairway to Heaven by Led Zeppelin has been removed from the playlist.