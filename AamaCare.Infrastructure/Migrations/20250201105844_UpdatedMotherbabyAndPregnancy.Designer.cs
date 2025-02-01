﻿// <auto-generated />
using System;
using AamaCare.Infrastructure.Persistence;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

#nullable disable

namespace AamaCare.Infrastructure.Migrations
{
    [DbContext(typeof(AamaCareDbContext))]
    [Migration("20250201105844_UpdatedMotherbabyAndPregnancy")]
    partial class UpdatedMotherbabyAndPregnancy
    {
        /// <inheritdoc />
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "9.0.1")
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

            SqlServerModelBuilderExtensions.UseIdentityColumns(modelBuilder);

            modelBuilder.Entity("AamaCare.Domain.Entities.Baby", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uniqueidentifier");

                    b.Property<DateTime>("BirthDate")
                        .HasColumnType("datetime2");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<Guid>("PregnancyId")
                        .HasColumnType("uniqueidentifier");

                    b.HasKey("Id");

                    b.HasIndex("PregnancyId")
                        .IsUnique();

                    b.ToTable("Babies");
                });

            modelBuilder.Entity("AamaCare.Domain.Entities.CheckupReminder", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uniqueidentifier");

                    b.Property<string>("Desscription")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<DateTime>("DueDate")
                        .HasColumnType("datetime2");

                    b.Property<Guid>("PregnancyId")
                        .HasColumnType("uniqueidentifier");

                    b.Property<string>("Title")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.HasIndex("PregnancyId");

                    b.ToTable("CheckupReminders");
                });

            modelBuilder.Entity("AamaCare.Domain.Entities.Mother", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uniqueidentifier");

                    b.Property<string>("Email")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("Mothers");
                });

            modelBuilder.Entity("AamaCare.Domain.Entities.Pregnancy", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uniqueidentifier");

                    b.Property<DateTime?>("DueDate")
                        .HasColumnType("datetime2");

                    b.Property<Guid>("MotherId")
                        .HasColumnType("uniqueidentifier");

                    b.Property<DateTime>("StartDate")
                        .HasColumnType("datetime2");

                    b.Property<int>("Status")
                        .HasColumnType("int");

                    b.HasKey("Id");

                    b.HasIndex("MotherId");

                    b.ToTable("Pregnancies");
                });

            modelBuilder.Entity("AamaCare.Domain.Entities.Baby", b =>
                {
                    b.HasOne("AamaCare.Domain.Entities.Pregnancy", "Pregnancy")
                        .WithOne("Baby")
                        .HasForeignKey("AamaCare.Domain.Entities.Baby", "PregnancyId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Pregnancy");
                });

            modelBuilder.Entity("AamaCare.Domain.Entities.CheckupReminder", b =>
                {
                    b.HasOne("AamaCare.Domain.Entities.Pregnancy", "Pregnancy")
                        .WithMany("Reminders")
                        .HasForeignKey("PregnancyId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Pregnancy");
                });

            modelBuilder.Entity("AamaCare.Domain.Entities.Pregnancy", b =>
                {
                    b.HasOne("AamaCare.Domain.Entities.Mother", "Mother")
                        .WithMany("Pregnancies")
                        .HasForeignKey("MotherId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Mother");
                });

            modelBuilder.Entity("AamaCare.Domain.Entities.Mother", b =>
                {
                    b.Navigation("Pregnancies");
                });

            modelBuilder.Entity("AamaCare.Domain.Entities.Pregnancy", b =>
                {
                    b.Navigation("Baby")
                        .IsRequired();

                    b.Navigation("Reminders");
                });
#pragma warning restore 612, 618
        }
    }
}
